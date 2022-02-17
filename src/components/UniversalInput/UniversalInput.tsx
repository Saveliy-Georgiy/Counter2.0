import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'
/*import {TextValueType} from "../../App";*/

type UniversalInputPropsType = {
   /* minValue: number
    maxValue: number*/
    setValueOrText: (valueOrText: boolean) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: number
    style?: string
    setDisableButtonSet: (disable: boolean) => void
/*    setTextValue: (text: TextValueType) => void*/
}
 //сделать инпут универсальным!!!!!!
const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        /*minValue,
        maxValue,*/
        setValueOrText,
        onChange,
        value,
        style,
        setDisableButtonSet,
        /*setTextValue,*/
        children,
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

     const finalInputClass = `${style} ${s.input}` //стиль, который хотим добавить и базовый стиль

    return (
        <div className={s.valueWrapper}>
            {children}
            <input type="number" onChange={onChangeHandler} value={value} className={finalInputClass}/>
        </div>
    );
};

export default UniversalInput;