import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from './TodoList'
import Form from './Form/Form'
import List from './List/List'

describe('TodoList component unit tests', () => {
    it('renders TodoList and children', () => {
        const result = shallow(<TodoList />)
        expect(result.find(Form).length).toEqual(1)
        expect(result.find(List).length).toEqual(1)
    });
});