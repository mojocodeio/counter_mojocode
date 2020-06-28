import React from 'react'

/** styles */
import styles from './Item.module.css'

export const Item = ({
    item,
    deleteTodo,
    toggleTodo,
    id,
}) => {
    return (
        <li className={`${styles.item} ${item.completed ? styles.completed : ''}`}>
            <h4>{item.title}</h4>
            <button onClick={() => toggleTodo(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}

export default Item