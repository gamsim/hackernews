export const GET_TOP_STORIES_SUCCESS = 'GET_TOP_STORIES_SUCCESS'
export const GET_TOP_STORIES_FAIL = 'GET_TOP_STORIES_FAIL'

const API_ORIGIN = 'https://hacker-news.firebaseio.com'

const asJson = (r: any) => r.json()

const fetchTopStories = () => {
  return fetch(
    `${API_ORIGIN}/v0/topstories.json?&orderBy="$key"&limitToFirst=10`
  )
    .then(asJson)
    .then((items) =>
      Promise.all(
        items.map((item: any) =>
          fetch(`${API_ORIGIN}/v0/item/${item}.json`).then(asJson)
        )
      )
    )
}

export default function reducer(
  state = { errors: [], topStories: [] },
  action: any
) {
  switch (action.type) {
    case GET_TOP_STORIES_SUCCESS:
      return { ...state, topStories: action.topStories }
    case GET_TOP_STORIES_FAIL:
      return {
        ...state,
        errors: action.error,
      }
    default:
      return state
  }
}

function getTopStoriesSuccess(topStories: any) {
  return {
    type: 'GET_TOP_STORIES_SUCCESS',
    topStories,
  }
}

function getTopStoriesFail(error: any) {
  return {
    type: 'GET_TOP_STORIES_FAIL',
    error,
  }
}

export function getTopStories() {
  return function(dispatch: any) {
    return fetchTopStories().then(
      (topStories) => dispatch(getTopStoriesSuccess(topStories)),
      (error) => dispatch(getTopStoriesFail(error))
    )
  }
}
