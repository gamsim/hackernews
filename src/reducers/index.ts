export const GET_TOP_STORIES_SUCCESS = 'GET_TOP_STORIES_SUCCESS'
export const GET_TOP_STORIES_FAIL = 'GET_TOP_STORIES_FAIL'
export const GET_TOP_COMMENTS_SUCCESS = 'GET_TOP_COMMENTS_SUCCESS'
export const GET_TOP_COMMENTS_FAIL = 'GET_TOP_COMMENTS_FAIL'

const API_ORIGIN = 'https://hacker-news.firebaseio.com'

export default function reducer(
  state = {
    errors: [],
    topStories: [],
    topComments: [],
  },
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
    case GET_TOP_COMMENTS_SUCCESS:
      return { ...state, topComments: action.topComments }
    case GET_TOP_COMMENTS_FAIL:
      return {
        ...state,
        errors: action.error,
      }
    default:
      return state
  }
}

const asJson = (r: any) => r.json()

const fetchWithTimeout = (url: string) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 30000)
    ),
  ])
}

const fetchItem = (item: any) =>
  fetchWithTimeout(`${API_ORIGIN}/v0/item/${item}.json?print=pretty`).then(
    asJson
  )

const fetchTopStories = () => {
  return fetchWithTimeout(`${API_ORIGIN}/v0/topstories.json?print=pretty`)
    .then(asJson)
    .then((items) =>
      Promise.all(items.slice(0, 10).map((item: any) => fetchItem(item)))
    )
}

const fetchTopComments = () => {
  return fetchTopStories().then((items: any) => {
    const commentIds = items.map((item: any) => item.kids.slice(0, 2)).flat()
    return Promise.all(commentIds.map((item: any) => fetchItem(item)))
  })
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

function getTopCommentsSuccess(topComments: any) {
  return {
    type: 'GET_TOP_COMMENTS_SUCCESS',
    topComments,
  }
}

function getTopCommentsFail(error: any) {
  return {
    type: 'GET_TOP_COMMENTS_FAIL',
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

export function getTopComments() {
  return function(dispatch: any) {
    return fetchTopComments().then(
      (topComments) => dispatch(getTopCommentsSuccess(topComments)),
      (error) => dispatch(getTopCommentsFail(error))
    )
  }
}
