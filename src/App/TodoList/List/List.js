import React from 'react'

/** components */
import Item from './Item/Item'

export const List = ({ todos }) => {
    return (
        <ul>
            {todos.map(item => {
                return (
                    <Item item={item} />
                )
            })}
        </ul>
    )
}

export default List