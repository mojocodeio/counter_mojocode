import React from 'react'

export const Item = ({
    item,
    deleteTodo,
    toggleTodo,
    id,
}) => {
    return (
        <li>
            <h4>{item.title}</h4>
            <button onClick={() => toggleTodo(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}

export default Item