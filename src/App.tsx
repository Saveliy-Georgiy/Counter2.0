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

    /*const [textValue, setTextValue] = useState<TextValueType>()*/

    const incorrectValue = "Incorrect value!" //стоило ли их делать глобальными?

    const correctValue = "Enter values and press 'set'" //стоило ли их делать глобальными?

    const [valueOrText, setValueOrText] = useState<boolean>(true)

    const changeCounter = () => value < maxValue && setValue(value + 1)

    const setCounter = () => {
        setValueOrText(true)
        setValue(minValue)
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

    const minStyle = `${(minValue < 0 || minValue >= maxValue) ? "minRed": "correctValue"}`

    const maxStyle = `${minValue >= maxValue || maxValue <= 0 ? "maxRed" : "correctValue"}`

    return (
        <div className="blockForCounter">
            <div className="counterWrapper">
                <div className="valueWrapper">
                    <UniversalInput
                        onChange={changeMaxValue}
                        value={maxValue}
                        setValueOrText={setValueOrText}
                        maxValue={maxValue}
                        minValue={minValue}
                        maxStyle={maxStyle}
                        /*setTextValue={setTextValue}*/>max value:</UniversalInput>
                    <UniversalInput
                        onChange={changeMinValue}
                        value={minValue}
                        setValueOrText={setValueOrText}
                        minValue={minValue}
                        maxValue={maxValue}
                        minStyle={minStyle}
                        /*setTextValue={setTextValue}*/>start value:</UniversalInput>
                </div>
                <div className="buttonsWrapper">
                    <UniversalButton onClick={setCounter} disable={false}>set
                    </UniversalButton>
                </div>
            </div>
            <div className="counterWrapper">
                <Counter valueOrText={valueOrText} value={value} /*textValue={textValue} setTextValue={setTextValue}*/
                         incorrectValue={incorrectValue}
                         correctValue={correctValue}
                         maxValue={maxValue} minValue={minValue}/>
                <div className="buttonsWrapper">
                    <UniversalButton onClick={changeCounter} disable={value === maxValue}>inc
                    </UniversalButton>
                    <UniversalButton onClick={resetCounter} disable={value === minValue}>reset
                    </UniversalButton>
                </div>
            </div>
        </div>
    );
}

export default App;
