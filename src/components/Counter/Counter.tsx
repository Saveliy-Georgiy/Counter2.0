import React from 'react';
/*import { TextValueType } from '../../App';*/
import s from './Counter.module.css'

type CounterPropsType = {
    valueOrText: boolean
    /*textValue?: TextValueType*/
    value?: number
    maxValue: number
    minValue: number
    incorrectValue: "Incorrect value!"
    correctValue: "Enter values and press 'set'"
    /* setTextValue: (text: TextValueType) => void*/
}

const Counter: React.FC<CounterPropsType> = (
    {
        valueOrText,
        value,
        // textValue,
        maxValue,
        minValue,
        incorrectValue,
        correctValue,
        /*setTextValue,*/
    }) => {


    const finalTextValue = (minValue < 0 || minValue === maxValue) ? incorrectValue : correctValue

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
