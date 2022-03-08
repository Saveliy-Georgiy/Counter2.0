import React, {ChangeEvent} from 'react';
import s from './FullCounter.module.css'
import UniversalInput from "./UniversalInput/UniversalInput";
import UniversalButton from "./UniversalButton/UniversalButton";
import Counter from "./Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrency} from "../../redux/counterReducer";
import {Dispatch} from "redux";
import {
    changeMaxValueAC,
    changeMinValueAC,
    FullCounterActionsTypes,
    increaseCounterAC,
    resetCounterAC,
    setCounterAC
} from "../../redux/actions";

export const FullCounter: React.FC = () => {

    const {
        value,
        minValue,
        maxValue,
        valueOrText,
        disableButtonSet,
        incorrectValue,
        correctValue,
    } = useSelector(selectCurrency)

    const dispatch = useDispatch<Dispatch<FullCounterActionsTypes>>()

    const increaseCounter = () => value < maxValue && dispatch(increaseCounterAC())
    const setCounter = () => dispatch(setCounterAC())
    const resetCounter = () => dispatch(resetCounterAC())
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    }

    const minStyle = (minValue < 0 || minValue >= maxValue) ? s.minRed : s.correctValue
    const maxStyle = minValue >= maxValue || maxValue <= 0 ? s.maxRed : s.correctValue

    const finalDisableButtonSet = !disableButtonSet ? (!(minValue >= 0 && maxValue > minValue)) : true
    //проверяет, если кнопка не задизейблена, то проверяет логику по числам, а если задизейблена, превращает первое выражение в false и возвращает true. Делал такое для того, чтобы не передавать значения макс и мин в инпуты, где уже потом та же самая проверка будет проводиться в функции, при изменение макс мин значений
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


