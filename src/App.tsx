import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

export type ErrorState = {
    max: boolean
    min: boolean
}

function App() {

    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [isButtonNotClicked, setIsButtonNotClicked] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [inputError, setInputError] = useState<ErrorState>({
        min: false,
        max: false
    })

    useEffect(() => {
        const max = localStorage.getItem('maxValue')
        if (max) {
            setMaxValue(JSON.parse(max))
        }
        const start = localStorage.getItem('startValue')
        if (start) {
            setStartValue(JSON.parse(start))
        }
        const countValue = localStorage.getItem('counterValue')
        if (countValue) {
            setCount(JSON.parse(countValue))
        }
        const isButtonNotClicked = localStorage.getItem('isButtonNotClicked')
        if (isButtonNotClicked) {
            setIsButtonNotClicked(JSON.parse(isButtonNotClicked))
        }
        const error = localStorage.getItem('errorType')
        if (error) {
            setError(JSON.parse(error))
        }
        const inputError = localStorage.getItem('inputError')
        if (inputError) {
            setInputError(JSON.parse(inputError))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.setItem('isButtonNotClicked', JSON.stringify(isButtonNotClicked))
        localStorage.setItem('errorType', JSON.stringify(error))
        localStorage.setItem('inputError', JSON.stringify(inputError))
    }, [startValue, maxValue, count, isButtonNotClicked, error, inputError])

    const disableIncButton = count === maxValue
    const disableResetButton = count === startValue
    const valuesAreEqual = startValue === maxValue
    const disableSetButton = startValue > maxValue ||
        startValue === maxValue ||
        maxValue <= 0 || startValue < 0

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setIsButtonNotClicked(true)
    }
    const changeStartValue = (value: number) => {
        setStartValue(value)
        setIsButtonNotClicked(true)
    }
    const setStartAsCount = () => {
        setCount(startValue)
        setIsButtonNotClicked(false)
    }

    const defineError = (value: string) => {
        setError(value)
    }

    const incCounter = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const resetCounter = () => {
        setCount(startValue)
    }

    return (
        <div className="App">
            <Settings maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      startValue={startValue}
                      changeStartValue={changeStartValue}
                      setStartAsCount={setStartAsCount}
                      isButtonNotClicked={isButtonNotClicked}
                      disableSetButton={disableSetButton}
                      defineError={defineError}
                      inputError={inputError}
                      setInputError={setInputError}/>
            <Counter count={count}
                     incCounter={incCounter}
                     resetCounter={resetCounter}
                     disableIncButton={disableIncButton}
                     disableResetButton={disableResetButton}
                     isButtonNotClicked={isButtonNotClicked}
                     error={error}
                     valuesAreEqual={valuesAreEqual}/>
        </div>
    );
}

export default App;
