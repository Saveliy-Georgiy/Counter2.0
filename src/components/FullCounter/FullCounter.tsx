import React, {ChangeEvent} from 'react';
import s from './FullCounter.module.css'
import UniversalInput from "./UniversalInput/UniversalInput";
import UniversalButton from "./UniversalButton/UniversalButton";
import Counter from "./Counter/Counter";

type FullCounterPropsType = {
    value: number
    minValue: number
    maxValue: number
    valueOrText: boolean
    incorrectValue: string
    correctValue: string
    increaseCounter: () => void
    setCounter: () => void
    resetCounter: () => void
    changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    finalDisableButtonSet: boolean
}

export const FullCounter: React.FC<FullCounterPropsType> = (
    {
        value,
        minValue,
        maxValue,
        valueOrText,
        incorrectValue,
        correctValue,
        increaseCounter,
        setCounter,
        resetCounter,
        changeMinValue,
        changeMaxValue,
        finalDisableButtonSet,
    }
) => {

    const minStyle = (minValue < 0 || minValue >= maxValue) ? s.minRed : s.correctValue
    const maxStyle = minValue >= maxValue || maxValue <= 0 ? s.maxRed : s.correctValue

    return (
        <div className={s.blockForCounter}>
            <div className={s.counterWrapper}>
                <div className={s.valueWrapper}>
                    <UniversalInput
                        onChange={changeMaxValue}
                        value={maxValue}
                        style={maxStyle}
                    >max value:</UniversalInput>
                    <UniversalInput
                        onChange={changeMinValue}
                        value={minValue}
                        style={minStyle}
                    >start value:</UniversalInput>
                </div>
                <div className={s.buttonsWrapper}>
                    <UniversalButton
                        onClick={setCounter}
                        disable={finalDisableButtonSet}>set
                    </UniversalButton>
                </div>
            </div>
            <div className={s.counterWrapper}>
                <Counter valueOrText={valueOrText}
                         value={value}
                         incorrectValue={incorrectValue}
                         correctValue={correctValue}
                         maxValue={maxValue}
                         minValue={minValue}
                />
                <div className={s.buttonsWrapper}>
                    <UniversalButton
                        onClick={increaseCounter}
                        disable={value === maxValue || !valueOrText}>inc
                    </UniversalButton>
                    <UniversalButton
                        onClick={resetCounter}
                        disable={value === minValue || !valueOrText}>reset
                    </UniversalButton>
                </div>
            </div>
        </div>
    );
}


