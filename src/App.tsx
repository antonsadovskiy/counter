import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [setButtonIsClicked, setSetButtonIsClicked] = useState<boolean>(false)
    const [isCountEqualsToMaxValue, setIsCountEqualsToMaxValue] = useState<boolean>(false)

    useEffect(() => {
        const countValue = localStorage.getItem('counterValue')
        if (countValue){
            setCount(JSON.parse(countValue))
        }
        const startValue = localStorage.getItem('startValue')
        if (startValue){
            setStartValue(JSON.parse(startValue))
        }
        const maxValue = localStorage.getItem('maxValue')
        if (maxValue){
            setMaxValue(JSON.parse(maxValue))
        }
        const error = localStorage.getItem('error')
        if (error){
            setError(JSON.parse(error))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.setItem('error', JSON.stringify(error))
    }, [startValue, maxValue, count, error])

    const incCounter = () => {
        const newCount = count + 1
        if (newCount === maxValue){
            setIsCountEqualsToMaxValue(true)
        }
        else {
            setIsCountEqualsToMaxValue(false)
        }
        setCount(newCount)
    }
    const resetCounter = () => {
        setCount(startValue)
        setIsCountEqualsToMaxValue(false)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setSetButtonIsClicked(false)
        setIsCountEqualsToMaxValue(false)
    }
    const changeStartValue = (value: number) => {
        setStartValue(value)
        setSetButtonIsClicked(false)
        setIsCountEqualsToMaxValue(false)
    }
    const setStartValueAsCount = () => {
        setCount(startValue)
        setIsCountEqualsToMaxValue(false)
    }
    const trackError = (error: string) => {
        setError(error)
    }
    const clickSetButtonHandler = () => {
        setSetButtonIsClicked(true)
    }


    return (
        <div className="App">
            <Settings maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      startValue={startValue}
                      changeStartValue={changeStartValue}
                      setStartValueAsCount={setStartValueAsCount}
                      trackError={trackError}
                      error={error}
                      setButtonIsClicked={setButtonIsClicked}
                      clickSetButtonHandler={clickSetButtonHandler}/>
            <Counter count={count}
                     incCounter={incCounter}
                     resetCounter={resetCounter}
                     error={error}
                     setButtonIsClicked={setButtonIsClicked}
                     isCountEqualsToMaxValue={isCountEqualsToMaxValue} />
        </div>
    );
}

export default App;