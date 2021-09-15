import React from 'react'
import useCounter from '../../hooks/useCounter'

function Counter() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
    return (
        <div>
            <h4>Count - {count}</h4>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>dencrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter
