import React, { useState } from 'react'

/** styles */
import styles from './Counter.module.css'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.counter}>
            <h2>{count}</h2>
            <div className={styles.buttons}>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter