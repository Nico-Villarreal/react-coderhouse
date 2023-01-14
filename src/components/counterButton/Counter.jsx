import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
    <div className='border border-dark rounded mx-5 bg-light'>
        <button className='m-2 p-2 rounded' onClick={() => setCounter(counter - 1)}>-</button>
        <span className='m-2'>{counter}</span>
        <button className='m-2 p-2 rounded' onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    );
};

export default Counter;