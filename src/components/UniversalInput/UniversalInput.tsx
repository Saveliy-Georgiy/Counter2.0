import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type UniversalInputPropsType = {
    setValueOrText: (valueOrText: boolean) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        setValueOrText,
        value,
        onChange,
        children,
    }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        setValueOrText(false)
    }

    return (
        <div className={s.valueWrapper}>
            {children}
            <input type="number" onChange={onChangeHandler} value={value}/>
        </div>
    );
};

export default UniversalInput;