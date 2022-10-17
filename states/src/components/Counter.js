import React from 'react';
import {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(0);


    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }


    return (
        <>
         <h1> {count} </h1>
         <button onClick={decrease}> decrease </button>
         <button onClick={increase}> increase </button>
        </>
    )
}

export default Counter;