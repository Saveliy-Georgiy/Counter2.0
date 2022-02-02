import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    maxCount: number
}

const Counter: React.FC<CounterPropsType> = (
    {
        value,
        maxCount,
        ...restProps
    }) => {

    const finalCounterClass = `${value === maxCount && s.maxCounter} ${s.counterWrapper}`
    return (
        <div className={finalCounterClass}>
            {value}
        </div>
    )
}

export default Counter;
