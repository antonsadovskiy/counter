import React, {useReducer, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    incCounterAC, resetCounterAC,
    setStartAsCountAC
} from "./redux/counter/counterReducer";

export type ErrorState = {
    max: boolean
    min: boolean
}
export type ValuesType = {
    maxValue: number
    startValue: number
    counterValue: number
}

function App() {

    const [values, dispatchValues] = useReducer(counterReducer, {
        maxValue: 1,
        startValue: 0,
        counterValue: 0
    })

    const [isButtonNotClicked, setIsButtonNotClicked] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [inputError, setInputError] = useState<ErrorState>({
        min: false,
        max: false
    })


    // const [maxValue, setMaxValue] = useState<number>(1)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [count, setCount] = useState<number>(0)
    // useEffect(() => {
    //     const max = localStorage.getItem('maxValue')
    //     if (max) {
    //         setValues({...values, maxValue: JSON.parse(max)})
    //     }
    //     const start = localStorage.getItem('startValue')
    //     if (start) {
    //         setValues({...values, startValue: JSON.parse(start)})
    //     }
    //     const countValue = localStorage.getItem('counterValue')
    //     if (countValue) {
    //         setCount(JSON.parse(countValue))
    //     }
    //     const isButtonNotClicked = localStorage.getItem('isButtonNotClicked')
    //     if (isButtonNotClicked) {
    //         setIsButtonNotClicked(JSON.parse(isButtonNotClicked))
    //     }
    //     const error = localStorage.getItem('errorType')
    //     if (error) {
    //         setError(JSON.parse(error))
    //     }
    //     const inputError = localStorage.getItem('inputError')
    //     if (inputError) {
    //         setInputError(JSON.parse(inputError))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(values.startValue))
    //     localStorage.setItem('maxValue', JSON.stringify(values.maxValue))
    //     localStorage.setItem('counterValue', JSON.stringify(count))
    //     localStorage.setItem('isButtonNotClicked', JSON.stringify(isButtonNotClicked))
    //     localStorage.setItem('errorType', JSON.stringify(error))
    //     localStorage.setItem('inputError', JSON.stringify(inputError))
    // }, [values.startValue, values.startValue, count, isButtonNotClicked, error, inputError])

    const disableIncButton = values.counterValue === values.maxValue
    const disableResetButton = values.counterValue === values.startValue
    const valuesAreEqual = values.startValue === values.maxValue
    const disableSetButton = values.startValue > values.maxValue ||
        values.startValue === values.maxValue ||
        values.maxValue <= 0 || values.startValue < 0

    const changeMaxValue = (value: number) => {
        dispatchValues(changeMaxValueAC(value))
        // setValues({...values, maxValue: value})
        setIsButtonNotClicked(true)
    }
    const changeStartValue = (value: number) => {
        dispatchValues(changeStartValueAC(value))
        // setValues({...values, startValue: value})
        setIsButtonNotClicked(true)
    }
    const setStartAsCount = () => {
        dispatchValues(setStartAsCountAC(values.startValue))
        // setCount(values.startValue)
        setIsButtonNotClicked(false)
    }

    const defineError = (value: string) => {
        setError(value)
    }

    const incCounter = () => {
        dispatchValues(incCounterAC())
        // const newCount = count + 1
        // setCount(newCount)
    }
    const resetCounter = () => {
        dispatchValues(resetCounterAC())
        // setCount(values.startValue)
    }

    return (
        <div className="App">
            <Settings maxValue={values.maxValue}
                      changeMaxValue={changeMaxValue}
                      startValue={values.startValue}
                      changeStartValue={changeStartValue}
                      setStartAsCount={setStartAsCount}
                      isButtonNotClicked={isButtonNotClicked}
                      disableSetButton={disableSetButton}
                      defineError={defineError}
                      inputError={inputError}
                      setInputError={setInputError}/>
            <Counter count={values.counterValue}
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
