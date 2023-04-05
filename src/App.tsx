import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStoreType} from "./redux/store/store";
import {InputErrorType} from "./redux/errors/errorsReducer";
import SettingsMemo from './components/Settings/Settings';
import CounterMemo from "./components/Counter/Counter";

function App() {

    const maxValue = useSelector<AppStoreType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppStoreType, number>(state => state.settings.startValue)
    const counterValue = useSelector<AppStoreType, number>(state => state.counter.counterValue)
    const isButtonNotClicked = useSelector<AppStoreType, boolean>(state => state.errors.isButtonNotClicked)
    const error = useSelector<AppStoreType, string>(state => state.errors.error)
    const inputError = useSelector<AppStoreType, InputErrorType>(state => state.errors.inputError)

    // useEffect(() => {
    //     const isButtonNotClicked = localStorage.getItem('isButtonNotClicked')
    //     if (isButtonNotClicked) {
    //         dispatch(setIsButtonNotClickedAC(JSON.parse(isButtonNotClicked)))
    //     }
    //     const error = localStorage.getItem('error')
    //     if (error){
    //         dispatch(setErrorAC(error))
    //     }
    //     const inputError = localStorage.getItem('inputError')
    //     if (inputError) {
    //         dispatch(setInputErrorAC(JSON.parse(inputError)))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('isButtonNotClicked', JSON.stringify(isButtonNotClicked))
    //     localStorage.setItem('error', error)
    //     localStorage.setItem('inputError', JSON.stringify(inputError))
    // }, [isButtonNotClicked, error, inputError])

    const checkDisableCounter = (value: number) => counterValue === value
    const checkAreEqual = (maxValue: number, startValue: number) => startValue === maxValue;
    const checkDisableSettings = (maxValue: number, startValue: number) => {
        return startValue > maxValue || checkAreEqual(maxValue, startValue) ||
            maxValue <= 0 || startValue < 0
    }

    const disableIncButton = checkDisableCounter(maxValue);
    const disableResetButton = checkDisableCounter(startValue);
    const valuesAreEqual = checkAreEqual(maxValue, startValue);
    const disableSetButton = checkDisableSettings(maxValue, startValue);

    return (
        <div className="App">
            <SettingsMemo maxValue={maxValue}
                          startValue={startValue}
                          isButtonNotClicked={isButtonNotClicked}
                          inputError={inputError}
                          disableSetButton={disableSetButton}/>
            <CounterMemo startValue={startValue}
                         disableIncButton={disableIncButton}
                         disableResetButton={disableResetButton}
                         valuesAreEqual={valuesAreEqual}
                         isButtonNotClicked={isButtonNotClicked}
                         error={error}/>
        </div>
    );
}

export default App;
