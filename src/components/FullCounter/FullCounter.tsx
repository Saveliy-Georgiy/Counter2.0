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
        minValueForEffect,
        maxValueForEffect,
        valueOrText,
        disableButtonSet,
        incorrectValue,
        correctValue,
    } = useSelector(selectCurrency)


    const dispatch = useDispatch<Dispatch<FullCounterActionsTypes>>()

    // const [value, setValue] = useState<number>(0)
    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(7)
    // const [minValueForEffect, setMinValueForEffect] = useState<number>(0)
    // const [maxValueForEffect, setMaxValueForEffect] = useState<number>(7)
    // const [valueOrText, setValueOrText] = useState<boolean>(true)
    // const [disableButtonSet, setDisableButtonSet] = useState<boolean>(true)
    //const incorrectValue = "Incorrect value!"
    //const correctValue = "Enter values and press 'set'"

    // const changeCounter = () => value < maxValue && setValue(value + 1)
    const increaseCounter = () => value < maxValue && dispatch(increaseCounterAC())

    const setCounter = () => dispatch(setCounterAC())

    /* const setCounter = () => {
         setValueOrText(true)
         setValue(minValue)
         setDisableButtonSet(true)
         setMinValueForEffect(minValue)
         setMaxValueForEffect(maxValue)
     }*/

    // const resetCounter = () => setValue(minValue)
    const resetCounter = () => dispatch(resetCounterAC())

    /*const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValueOrText(false)
        setDisableButtonSet(false)
        setMinValue(Number(e.currentTarget.value))
    }*/

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    }
    /* const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
         setValueOrText(false)
         setDisableButtonSet(false)
         setMinValue(Number(e.currentTarget.value))
     }*/

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    }
  /*  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValueOrText(false)
        setDisableButtonSet(false)
        setMaxValue(Number(e.currentTarget.value))
    }
*/
    // useEffect(() => {
    //     const counterValue = localStorage.getItem('counterValue')
    //     const minValue = localStorage.getItem('minValue')
    //     const maxValue = localStorage.getItem('maxValue')
    //
    //     if (maxValue) {
    //         setMaxValue(JSON.parse(maxValue))
    //         setMaxValueForEffect(JSON.parse(maxValue)) //получаем в переменную для эффектов значения тоже, чтобы они не обнулялись
    //     }
    //
    //     if (counterValue) {
    //         let newValue = JSON.parse(counterValue)
    //         setValue(newValue)
    //     }
    //
    //     if (minValue) {
    //         setMinValue(JSON.parse(minValue))
    //         setMinValueForEffect(JSON.parse(minValue))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minValueForEffect))
    // }, [minValueForEffect])
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValueForEffect))
    // }, [maxValueForEffect])

    const minStyle = (minValue < 0 || minValue >= maxValue) ? "minRed" : "correctValue"
    const maxStyle = minValue >= maxValue || maxValue <= 0 ? "maxRed" : "correctValue"

    const finalDisableButtonSet = !disableButtonSet ? (!(minValue >= 0 && maxValue > minValue)) : true
    //проверяет, если кнопка не задизейблена, то проверяет логику по числам, а если задизейблена, превращает первое выражение в false и возвращает true. Делал такое для того, чтобы не передавать значения макс и мин в инпуты, где уже потом та же самая проверка будет проводиться в функции, при изменение макс мин значений
    return (
        <div className={s.blockForCounter}>
            <div className={s.counterWrapper}>
                <div className={s.valueWrapper}>
                    <UniversalInput
                        onChange={changeMaxValue}
                        value={maxValue}
                        /*setValueOrText={setValueOrText}*/
                        style={maxStyle}
                        /*setDisableButtonSet={setDisableButtonSet}*/>max value:</UniversalInput>
                    <UniversalInput
                        onChange={changeMinValue}
                        value={minValue}
                        /*setValueOrText={setValueOrText}*/
                        style={minStyle}
                        /*setDisableButtonSet={setDisableButtonSet}*/>start value:</UniversalInput>
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


