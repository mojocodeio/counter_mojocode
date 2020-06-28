import React, { Fragment } from 'react'

/** components */
import Counter from './Counter/Counter'
import Section from './Section/Section'

export const App = () => (
  <Fragment>
    <Section>
      <Counter />
    </Section>
  </Fragment>
)

export default App
