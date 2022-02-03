import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    valueOrText: boolean
    textValue?: "Enter value and press 'set'"
    value?: number
    maxValue: number
    minValue: number
}

const Counter: React.FC<CounterPropsType> = (
    {
        valueOrText,
        value,
        textValue,
        maxValue,
        // minValue,
    }) => {

    const finalCounterClass = `${value === maxValue && s.maxCounter} ${s.counterWrapper}`
    return (
        <div className={finalCounterClass}>
            {valueOrText ? value: textValue}
          {/*  {value}
            {textValue}*/}
        </div>
    )
}

export default Counter;
