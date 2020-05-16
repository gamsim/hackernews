import React from 'react'

import { render } from '@testing-library/react'
import Comment from './Comment'

const init = (props) => render(<Comment {...props} />)

describe('Test comment component', () => {
  test('should render comment with no props', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })

  test('should render comment with props', () => {
    const { container } = init({
      text: 'Test',
      by: 'Simon Gamble',
    })
    expect(container).toMatchSnapshot()
  })
})
