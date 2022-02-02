import React from 'react';
import s from './UniversalInput.module.css'

type UniversalInputPropsType = {}

const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        children,
    }) => {
    return (
        <div className={s.valueWrapper}>
            {children}
            <input type="text"/>
        </div>
    );
};

export default UniversalInput;