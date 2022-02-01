import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    maxCount: number
}

const Counter: React.FC<CounterPropsType> = (
    {
        counter,
        maxCount,
        ...restProps
    }) => {

    const finalCounterClass = `${counter === maxCount && s.maxCounter} ${s.counterWrapper}`
    return (
        <div className={finalCounterClass}>
            {counter}
        </div>
    )
}

export default Counter;
