import React, { Fragment, useState } from 'react'

/** components */
import Form from './Form/Form'
import List from './List/List'

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (index === i) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => {
            return index !== i
        })
        setTodos(newTodos)
    }

    return (
        <Fragment>
            <Form addTodo={addTodo} />
            <List
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </Fragment>
    )
}

export default TodoList