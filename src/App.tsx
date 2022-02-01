import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import UniversalButton from './components/UniversalButton/UniversalButton';

const App = () => {

    const [counter, setCounter] = useState<number>(0)

    const maxCount = 5

    const changeCounter = () => counter < maxCount && setCounter(counter + 1)

    const resetCounter = () => setCounter(0)

    return (
            <div className="blockForCounter">
                <div className="counterWrapper">
                    <Counter counter={counter} maxCount={maxCount}/>
                    <div className="buttonsWrapper">
                        <UniversalButton onClick={changeCounter} disable={counter === 5}>inc
                        </UniversalButton>
                        <UniversalButton onClick={resetCounter} disable={counter === 0}>reset
                        </UniversalButton>
                    </div>
                </div>
            </div>
    );
}

export default App;
