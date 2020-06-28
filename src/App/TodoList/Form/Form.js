import React, { useState } from 'react'

export const Form = ({ addTodo }) => {
    const [todo, setTodo] = useState({})
    const title = todo.title ? todo.title : ''

    const handleSetTodo = value => {
        setTodo({
            completed: false,
            title: value,
        })
    }

    const handleAddTodo = item => {
        addTodo(item)
        setTodo({})
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                onChange={e => handleSetTodo(e.target.value)}
                value={title}
            />
            <button onClick={() => handleAddTodo(todo)}>Submit</button>
        </form>
    )
}

export default Form