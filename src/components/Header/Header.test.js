import React from 'react'

import { render } from '@testing-library/react'
import Header from './Header'

const init = (props) => render(<Header {...props} />)

describe('Test header component', () => {
  test('should render header with no props', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })
})
