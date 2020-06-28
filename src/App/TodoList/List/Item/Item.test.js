import React from 'react'
import { shallow } from 'enzyme'
import { Item } from './Item'

describe('Item component unit tests', () => {
    it('renders li w/cname item', () => {
        const item = { title: 'hello', completed: false }
        const result = shallow(<Item item={item} />)
        expect(result.find('.item').length).toEqual(1)
    });
});