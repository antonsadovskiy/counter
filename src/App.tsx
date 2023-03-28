import React, {useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {CounterStateType, setCounterValueAC} from "./redux/counter/counterReducer";
import {changeSettingsValueAC, SettingsStateType} from "./redux/settings/settingsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/store/store";
import {ErrorsStateType, setErrorAC, setInputErrorAC, setIsButtonNotClickedAC} from "./redux/errors/errorsReducer";

export type ErrorState = {
    max: boolean
    min: boolean
}

function App() {

    const dispatch = useDispatch()
    const settings = useSelector<AppStoreType, SettingsStateType>(state => state.settings)
    const counter = useSelector<AppStoreType, CounterStateType>(state => state.counter)
    const errors = useSelector<AppStoreType, ErrorsStateType>(state => state.errors)

    useEffect(() => {
        const maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            dispatch(changeSettingsValueAC('maxValue', JSON.parse(maxValue)))
        }
        const startValue = localStorage.getItem('startValue')
        if (startValue) {
            dispatch(changeSettingsValueAC('startValue', JSON.parse(startValue)))
        }
        const counterValue = localStorage.getItem('counterValue')
        if (counterValue) {
            dispatch(setCounterValueAC(JSON.parse(counterValue)))
        }
        const isButtonNotClicked = localStorage.getItem('isButtonNotClicked')
        if (isButtonNotClicked) {
            dispatch(setIsButtonNotClickedAC(JSON.parse(isButtonNotClicked)))
        }
        const error = localStorage.getItem('error')
        if (error){
            dispatch(setErrorAC(error))
        }
        const inputError = localStorage.getItem('inputError')
        if (inputError) {
            dispatch(setInputErrorAC(JSON.parse(inputError)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(settings.maxValue))
        localStorage.setItem('startValue', JSON.stringify(settings.startValue))
        localStorage.setItem('counterValue', JSON.stringify(counter.counterValue))
        localStorage.setItem('isButtonNotClicked', JSON.stringify(errors.isButtonNotClicked))
        localStorage.setItem('error', errors.error)
        localStorage.setItem('inputError', JSON.stringify(errors.inputError))
    }, [settings.maxValue, settings.startValue, counter.counterValue, errors.isButtonNotClicked, errors.error, errors.inputError])

    const checkDisableCounter = (value: number) => counter.counterValue === value
    const checkAreEqual = (settings: SettingsStateType) => settings.startValue === settings.maxValue;
    const checkDisSetting = (settings: SettingsStateType) => {
        return settings.startValue > settings.maxValue || checkAreEqual(settings) ||
            settings.maxValue <= 0 || settings.startValue < 0
    }

    const disableIncButton = checkDisableCounter(settings.maxValue);
    const disableResetButton = checkDisableCounter(settings.startValue);
    const valuesAreEqual = checkAreEqual(settings);
    const disableSetButton = checkDisSetting(settings);

    return (
        <div className="App">
            <Settings settings={settings}
                      errors={errors}
                      disableSetButton={disableSetButton}/>
            <Counter count={counter.counterValue}
                     startValue={settings.startValue}
                     disableIncButton={disableIncButton}
                     disableResetButton={disableResetButton}
                     valuesAreEqual={valuesAreEqual}
                     isButtonNotClicked={errors.isButtonNotClicked}
                     error={errors.error}/>
        </div>
    );
}

export default App;
