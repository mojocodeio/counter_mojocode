import React from 'react'

/** components */
import Item from './Item/Item'

export const List = ({
    todos,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <ul>
            {todos.map((item, index) => {
                return (
                    <Item
                        item={item}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        key={index}
                        id={index}
                    />
                )
            })}
        </ul>
    )
}

export default List