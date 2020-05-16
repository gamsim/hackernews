import React from 'react'

import { render } from '@testing-library/react'
import App from './App'

const init = () => render(<App />)

describe('My App component', () => {
  test('should render app without error ', () => {
    const { container } = init()
    expect(container).toMatchSnapshot()
  })
})
