import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders component', () => {
    const container = wrapper.find('.app')

    expect(container.exists()).toBe(true)
  })
})
