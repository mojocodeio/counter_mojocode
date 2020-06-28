import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import Counter from './Counter/Counter'
import TodoList from './TodoList/TodoList'

describe('App component unit tests', () => {
  it('renders App and children', () => {
    const result = shallow(<App />)
    expect(result.find(Counter).length).toEqual(1)
    expect(result.find(TodoList).length).toEqual(1)
  })
})

