import React, { useState } from 'react';
import "../styles/counter.css"

const Counter = () => {
    const [count, setCount] = useState(0); 
    return (
        <div>
            <div className="count">{count}</div>
            <div className="buttons">
                <button className="button minus"
                onClick={() => {setCount(count - 1)}}>-</button>
                <button className="button plus"
                onClick={() => {setCount(count + 1)}}>+</button>
                </div>
        </div>
    );
};

export default Counter;