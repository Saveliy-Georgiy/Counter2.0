import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type UniversalInputPropsType = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: number
    style?: string
}

const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        onChange,
        value,
        style,
        children,
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    const finalInputClass = `${style} ${s.input}` //стиль, который хотим добавить и базовый стиль

    return (
        <div className={s.inputWrapper}>
            {children}
            <input type="number" onChange={onChangeHandler} value={value} className={finalInputClass}/>
        </div>
    );
};

export default UniversalInput;