import React from 'react'

export const List = ({ todos }) => {
    return (
        <ul>
            {todos.map(item => {
                return (
                    <li>
                        {item.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default List