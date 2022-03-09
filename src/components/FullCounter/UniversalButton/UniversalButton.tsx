import React from 'react';
import s from './UniversalButton.module.css'

type UniversalButtonPropsType = {
    onClick?: () => void
    disable?: boolean
}

const UniversalButton: React.FC<UniversalButtonPropsType> = (
    {
        children,
        onClick,
        disable,
        ...restProps
    }) => {

    return (
        <button onClick={onClick} className={s.buttonWrapper} disabled={disable}>
            {children}
        </button>
    );
}

export default UniversalButton;
