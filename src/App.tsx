import React, {useCallback} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store/store";
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";

function App() {

    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.settings.startValue)
    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)
    const isButtonNotClicked = useSelector<AppStateType, boolean>(state => state.errors.isButtonNotClicked)

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
                      disableSetButton={disableSetButton}/>
            <Counter count={counterValue}
                     startValue={startValue}
                     disableIncButton={disableIncButton}
                     disableResetButton={disableResetButton}
                     valuesAreEqual={valuesAreEqual}
                     isButtonNotClicked={isButtonNotClicked}/>
        </div>
    );
}

export default App;
