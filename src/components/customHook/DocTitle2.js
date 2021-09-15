import React, {useState} from 'react'
import useDocTitle from '../../hooks/useDocTitle'

export default function DocTitle2() {
    const [count, setCount] = useState(0)
    useDocTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}
