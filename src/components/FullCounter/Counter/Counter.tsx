import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    valueOrText: boolean
    value?: number
    maxValue: number
    minValue: number
    incorrectValue: string
    correctValue: string
}

const Counter: React.FC<CounterPropsType> = (
    {
        valueOrText,
        value,
        maxValue,
        minValue,
        incorrectValue,
        correctValue,
    }) => {


    const finalTextValue = (minValue < 0 || minValue >= maxValue) ? incorrectValue : correctValue

    const finalCounterClass =
        `${value === maxValue && valueOrText && s.maxCounter} 
    ${!valueOrText && finalTextValue === incorrectValue && s.incorrectValue} 
    ${!valueOrText && finalTextValue === correctValue && s.correctValue} 
    ${s.counterWrapper}`

    return (
        <div className={finalCounterClass}>
            {valueOrText ? value : finalTextValue}
        </div>
    )
}

export default Counter;
