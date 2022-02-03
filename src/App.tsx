import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import UniversalButton from './components/UniversalButton/UniversalButton';
import UniversalInput from "./components/UniversalInput/UniversalInput";

const App = () => {

    const [value, setValue] = useState<number>(0)

    const [minValue, setMinValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(7)

    const [valueOrText, setValueOrText] = useState<boolean>(true)

    const changeCounter = () => value < maxValue && setValue( Number(value) + 1) //после применения сета, валуе становится строкой почему-то, не могу понять, поэтому использую метод намбер

    const setCounter = () => {
       /* setMinValue(minValue)
        setMaxValue(maxValue)*/
        setValueOrText(true)
        setValue(minValue)
    }

    const resetCounter = () => setValue(0)

    const changeMinValue = (e: any) => {
        setMinValue(e.currentTarget.value)
    }

    const changeMaxValue = (e: any) => {
        setMaxValue(e.currentTarget.value)
    }

    useEffect( () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    return (
        <div className="blockForCounter">
            <div className="counterWrapper">
                <div className="valueWrapper">
                <UniversalInput onChange={changeMaxValue} value={maxValue} setValueOrText={setValueOrText}>max value:</UniversalInput>
                <UniversalInput onChange={changeMinValue} value={minValue} setValueOrText={setValueOrText}>start value:</UniversalInput>
                </div>
                <div className="buttonsWrapper">
                    <UniversalButton onClick={setCounter} disable={false}>set
                    </UniversalButton>
                </div>
            </div>
            <div className="counterWrapper">
                <Counter valueOrText={valueOrText} value={value} textValue="Enter value and press 'set'" maxValue={maxValue} minValue={minValue}/>
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
