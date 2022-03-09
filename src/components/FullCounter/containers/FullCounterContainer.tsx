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
import {selectCounter} from "../../../redux/counterReducer";
import {FullCounter} from "../FullCounter";

export const FullCounterContainer: React.FC = () => {

    const {counterState} = useSelector(selectCounter)

    const dispatch = useDispatch<Dispatch<FullCounterActionsTypes>>()

    const increaseCounter = () => counterState.value < counterState.maxValue && dispatch(increaseCounterAC())
    const setCounter = () => dispatch(setCounterAC())
    const resetCounter = () => dispatch(resetCounterAC())
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    }

    const disableIncAndReset = counterState.value === counterState.maxValue || !counterState.valueOrText
    const finalDisableButtonSet = !counterState.disableButtonSet ? (!(counterState.minValue >= 0 && counterState.maxValue > counterState.minValue)) : true
    //проверяет, если кнопка не задизейблена, то проверяет логику по числам, а если задизейблена, превращает первое выражение в false и возвращает true. Делал такое для того, чтобы не передавать значения макс и мин в инпуты, где уже потом та же самая проверка будет проводиться в функции, при изменение макс мин значений

    return (
        <>
            <FullCounter
                counterState={counterState}
                increaseCounter={increaseCounter}
                setCounter={setCounter}
                resetCounter={resetCounter}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                disableIncAndReset={disableIncAndReset}
                finalDisableButtonSet={finalDisableButtonSet}
            />
        </>
    );
}


