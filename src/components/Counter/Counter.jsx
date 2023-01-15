import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
    <div className='d-flex border border-dark rounded bg-light justify-content-center aling-items-center'>
        <button className='m-2 p-2 rounded' onClick={() => setCounter(counter - 1)}>-</button>
        <span className='m-2'>{counter}</span>
        <button className='m-2 p-2 rounded' onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    );
};

export default Counter;