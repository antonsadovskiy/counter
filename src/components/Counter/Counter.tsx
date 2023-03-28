import React, {FC} from 'react';
import Button from "../Button/Button";
import s from './Counter.module.css'
import Display from "./Display/Display";
import {useDispatch} from "react-redux";
import {incCounterAC, resetCounterAC} from "../../redux/counter/counterReducer";

export type CounterPropsType = {
    count: number
    startValue: number
    disableIncButton: boolean
    disableResetButton: boolean
    isButtonNotClicked: boolean
    error: string
    valuesAreEqual: boolean
}

const Counter: FC<CounterPropsType> = (
    {
        count,
        startValue,
        disableIncButton,
        disableResetButton,
        isButtonNotClicked,
        error,
        valuesAreEqual
    }
) => {

    const dispatch = useDispatch()
    const incCounter = () => dispatch(incCounterAC())
    const resetCounter = () => dispatch(resetCounterAC(startValue))

    return (
        <div className={s.counterContainer}>
            <Display count={count}
                     isButtonNotClicked={isButtonNotClicked}
                     disableIncButton={disableIncButton}
                     error={error}
                     valuesAreEqual={valuesAreEqual}/>
            <div className={s.buttonContainer}>
                <Button name={'inc'}
                        callback={incCounter}
                        disableIncButton={disableIncButton}
                        isButtonNotClicked={isButtonNotClicked}/>
                <Button name={'reset'}
                        callback={resetCounter}
                        disableResetButton={disableResetButton}
                        isButtonNotClicked={isButtonNotClicked}/>
            </div>
        </div>
    );
};

export default Counter;