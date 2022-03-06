import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type UniversalInputPropsType = {
    //setValueOrText: (valueOrText: boolean) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: number
    style?: string
    //setDisableButtonSet: (disable: boolean) => void
}

const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        onChange,
        value,
        style,
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