import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import UniversalButton from './components/UniversalButton/UniversalButton';
import UniversalInput from "./components/UniversalInput/UniversalInput";

const App = () => {

    const [value, setValue] = useState<number>(0)

    const maxCount = 5

    const changeCounter = () => value < maxCount && setValue(value + 1)

    const setCounter = () => console.log("setValue")

    const resetCounter = () => setValue(0)

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
                <UniversalInput>max value:</UniversalInput>
                <UniversalInput>start value:</UniversalInput>
                </div>
                <div className="buttonsWrapper">
                    <UniversalButton onClick={setCounter} disable={value === 5}>set
                    </UniversalButton>
                </div>
            </div>
            <div className="counterWrapper">
                <Counter value={value} maxCount={maxCount}/>
                <div className="buttonsWrapper">
                    <UniversalButton onClick={changeCounter} disable={value === 5}>inc
                    </UniversalButton>
                    <UniversalButton onClick={resetCounter} disable={value === 0}>reset
                    </UniversalButton>
                </div>
            </div>
        </div>
    );
}

export default App;
