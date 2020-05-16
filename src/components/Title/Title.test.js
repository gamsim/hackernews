import React from 'react'

import { render } from '@testing-library/react'
import Title from './Title'

const init = (props) => render(<Title {...props} />)

describe('Test title component', () => {
  test('should render title with no props', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })

  test('should render title with props', () => {
    const { container } = init({
      title: 'Test',
      score: 1,
      url: 'http://www.test.com',
      by: 'Simon Gamble',
    })
    expect(container).toMatchSnapshot()
  })
})
