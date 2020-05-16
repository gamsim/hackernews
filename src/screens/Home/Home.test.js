import React from 'react'

import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import Home from './Home'

const mockStore = configureStore([])

jest.mock('../../hooks/useFetching')

const init = (store) =>
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  )

describe('My connected React-Redux component', () => {
  test('should render home page with default state from Redux store', () => {
    const store = mockStore({
      topStories: [],
      errors: [],
    })

    const { container } = init(store)
    expect(container).toMatchSnapshot()
  })

  test('should render home page with top stories', () => {
    const store = mockStore({
      topStories: [
        {
          by: 'test1',
          descendants: 1,
          id: 1,
          kids: [1],
          score: 1,
          time: 1,
          title: 'Test 1',
          type: 'story',
          url: 'http://www.test.com',
        },
      ],
      errors: [],
    })
    const { container } = init(store)
    expect(container).toMatchSnapshot()
  })
})
