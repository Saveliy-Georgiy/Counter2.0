import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'
/*import {TextValueType} from "../../App";*/

type UniversalInputPropsType = {
    minValue: number
    maxValue: number
    setValueOrText: (valueOrText: boolean) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: number
    maxStyle?: string
    minStyle?: string
/*    setTextValue: (text: TextValueType) => void*/
}

const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        /*minValue,
        maxValue,*/
        setValueOrText,
        onChange,
        value,
        maxStyle,
        minStyle,
        /*setTextValue,*/
        children,
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        /*(minValue < 0 || minValue === maxValue) ?  setTextValue("Incorrect value!") : setTextValue("Enter value and press 'set'")*/
        //походу из-за асинхрона не срабатывает вовремя, буду искать другой метод
        onChange(e)
        setValueOrText(false)
    }

   /* const finalInputClass = `${s.input} ${minValue < 0 && minStyles} ${minValue >= maxValue && (minStyles && maxValue)} ${minValue >= 0 && minValue < maxValue && s.correctValues}`*/
     const finalInputClass =  `${maxStyle} ${minStyle} ${s.input}`

    return (
        <div className={s.valueWrapper}>
            {children}
            <input type="number" onChange={onChangeHandler} value={value} className={finalInputClass}/>
        </div>
    );
};

export default UniversalInput;