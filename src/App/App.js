import React, { Fragment } from 'react'

/** components */
import Counter from './Counter/Counter'
import Section from './Section/Section'
import TodoList from './TodoList/TodoList'

export const App = () => (
  <Fragment>
    <Section>
      <Counter />
    </Section>

    <Section>
      <TodoList />
    </Section>
  </Fragment>
)

export default App
