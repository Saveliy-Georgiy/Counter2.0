import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import UniversalButton from './components/UniversalButton/UniversalButton';
import UniversalInput from "./components/UniversalInput/UniversalInput";

/*export type TextValueType = "Enter value and press 'set'" | "Incorrect value!"*/

const App = () => {

    const [value, setValue] = useState<number>(0)

    const [minValue, setMinValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(7)

    const [minValueForEffect, setMinValueForEffect] = useState<number>(0)

    const [maxValueForEffect, setMaxValueForEffect] = useState<number>(7)

    /*const [textValue, setTextValue] = useState<TextValueType>()*/

    const incorrectValue = "Incorrect value!" //стоило ли их делать глобальными?

    const correctValue = "Enter values and press 'set'" //стоило ли их делать глобальными?

    const [valueOrText, setValueOrText] = useState<boolean>(true)

    const [disableButtonSet, setDisableButtonSet] = useState<boolean>(true)

    const changeCounter = () => value < maxValue && setValue(value + 1)

    const setCounter = () => {
        setValueOrText(true)
        setValue(minValue)
        setDisableButtonSet(true)
        setMinValueForEffect(minValue)
        setMaxValueForEffect(maxValue)
    }

    const resetCounter = () => setValue(minValue)

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => { //ругалось на типы, привел значение к намберу, потому что сет был типа намбера, а из инпута приходила строка, в которой лежало число
        setMinValue(Number(e.currentTarget.value))
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        const valueAsString = localStorage.getItem('minValue')
        if(valueAsString) {
            setMinValue(JSON.parse(valueAsString))
            setMinValueForEffect(JSON.parse(valueAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValueForEffect))
    }, [minValueForEffect])

    useEffect(() => {
        const valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            setMaxValue(JSON.parse(valueAsString))
            setMaxValueForEffect(JSON.parse(valueAsString)) //получаем в переменную для эффектов значения тоже, чтобы они не обнулялись
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValueForEffect))
    }, [maxValueForEffect])

    const minStyle = (minValue < 0 || minValue >= maxValue) ? "minRed": "correctValue"

    const maxStyle = minValue >= maxValue || maxValue <= 0 ? "maxRed" : "correctValue"

    /*const disableButtonSet = (!(minValue >= 0 && maxValue > minValue)) //но этот вариант не проверяет на вызов функции setCounter*/
    const finalDisableButtonSet = !disableButtonSet ? (!(minValue >= 0 && maxValue > minValue)): true
    //проверяет, если кнопка не задизейблена, то проверяет логику по числам, а если задизейблена, превращает первое выражение в false и возвращает true. Делал такое для того, чтобы не передавать значения макс и мин в инпуты, где уже потом та же самая проверка будет проводиться в функции, при изменение макс мин значений
    return (
        <div className="blockForCounter">
            <div className="counterWrapper">
                <div className="valueWrapper">
                    <UniversalInput
                        onChange={changeMaxValue}
                        value={maxValue}
                        setValueOrText={setValueOrText}
                        /*maxValue={maxValue}
                        minValue={minValue}*/
                        maxStyle={maxStyle}
                        setDisableButtonSet={setDisableButtonSet}
                        /*setTextValue={setTextValue}*/>max value:</UniversalInput>
                    <UniversalInput
                        onChange={changeMinValue}
                        value={minValue}
                        setValueOrText={setValueOrText}
                        /*minValue={minValue}
                        maxValue={maxValue}*/
                        minStyle={minStyle}
                        setDisableButtonSet={setDisableButtonSet}
                        /*setTextValue={setTextValue}*/>start value:</UniversalInput>
                </div>
                <div className="buttonsWrapper">
                    <UniversalButton
                        onClick={setCounter}
                        disable={finalDisableButtonSet}>set
                    </UniversalButton>
                </div>
            </div>
            <div className="counterWrapper">
                <Counter valueOrText={valueOrText}
                         value={value}
                         incorrectValue={incorrectValue}
                         correctValue={correctValue}
                         maxValue={maxValue}
                         minValue={minValue}
                    /*textValue={textValue}
                    setTextValue={setTextValue}*/
                />
                <div className="buttonsWrapper">
                    <UniversalButton
                        onClick={changeCounter}
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

export default App;
