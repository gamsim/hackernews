import React from 'react'

import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Comments from './Comments'

const mockStore = configureStore([])

jest.mock('../../hooks/useFetching')

const init = (store) =>
  render(
    <Provider store={store}>
      <Comments />
    </Provider>
  )

describe('My connected React-Redux component', () => {
  test('should render comments page with default state from Redux store', () => {
    const store = mockStore({
      topComments: [],
      errors: [],
    })

    const { container } = init(store)
    expect(container).toMatchSnapshot()
  })

  test('should render comments page with top comments', () => {
    const store = mockStore({
      topComments: [
        {
          by: 'test1',
          id: 1,
          kids: [1],
          parent: 1,
          time: 1,
          text: 'Test 1',
          type: 'story',
        },
      ],
      errors: [],
    })
    const { container } = init(store)
    expect(container).toMatchSnapshot()
  })
})
