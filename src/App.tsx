import React, {useCallback} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStoreType} from "./redux/store/store";
import {InputErrorType} from "./redux/errors/errorsReducer";
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";

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

    const checkDisableCounter = useCallback((value: number) => counterValue === value, [counterValue])
    const checkAreEqual = useCallback((maxValue: number, startValue: number) => startValue === maxValue, [])
    const checkDisableSettings = useCallback((maxValue: number, startValue: number) => {
        return startValue > maxValue || checkAreEqual(maxValue, startValue) ||
            maxValue <= 0 || startValue < 0
    }, [checkAreEqual])

    const disableIncButton = checkDisableCounter(maxValue);
    const disableResetButton = checkDisableCounter(startValue);
    const valuesAreEqual = checkAreEqual(maxValue, startValue);
    const disableSetButton = checkDisableSettings(maxValue, startValue);

    return (
        <div className="App">
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      isButtonNotClicked={isButtonNotClicked}
                      inputError={inputError}
                      disableSetButton={disableSetButton}/>
            <Counter count={counterValue}
                     startValue={startValue}
                     disableIncButton={disableIncButton}
                     disableResetButton={disableResetButton}
                     valuesAreEqual={valuesAreEqual}
                     isButtonNotClicked={isButtonNotClicked}
                     error={error}/>
        </div>
    );
}

export default App;
