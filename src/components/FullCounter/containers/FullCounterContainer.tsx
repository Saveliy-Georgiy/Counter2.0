import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    changeMaxValueAC,
    changeMinValueAC,
    increaseCounterAC,
    resetCounterAC,
    setCounterAC,
    FullCounterActionsTypes,
} from "../../../redux/actions";
import {selectCurrency} from "../../../redux/counterReducer";
import {FullCounter} from "../FullCounter";

export const FullCounterContainer: React.FC = () => {

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

    const finalDisableButtonSet = !disableButtonSet ? (!(minValue >= 0 && maxValue > minValue)) : true
    //проверяет, если кнопка не задизейблена, то проверяет логику по числам, а если задизейблена, превращает первое выражение в false и возвращает true. Делал такое для того, чтобы не передавать значения макс и мин в инпуты, где уже потом та же самая проверка будет проводиться в функции, при изменение макс мин значений

    return (
        <>
            <FullCounter
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                valueOrText={valueOrText}
                incorrectValue={incorrectValue}
                correctValue={correctValue}
                increaseCounter={increaseCounter}
                setCounter={setCounter}
                resetCounter={resetCounter}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                finalDisableButtonSet={finalDisableButtonSet}
            />
        </>
    );
}


