import React, {FC} from 'react';
import s from './Counter.module.css'
import Display from "./Display/Display";
import {useDispatch} from "react-redux";
import {incCounterAC, resetCounterAC} from "../../redux/counter/counterReducer";
import MyButton from "../Button/Button";

export type CounterPropsType = {
    count: number
    startValue: number
    disableIncButton: boolean
    disableResetButton: boolean
    isButtonNotClicked: boolean
    error: string
    valuesAreEqual: boolean
}

const Counter: FC<CounterPropsType> = React.memo((
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
                <MyButton name={'inc'}
                          callback={incCounter}
                          disableIncButton={disableIncButton}
                          isButtonNotClicked={isButtonNotClicked}/>
                <MyButton name={'reset'}
                          callback={resetCounter}
                          disableResetButton={disableResetButton}
                          isButtonNotClicked={isButtonNotClicked}/>
            </div>
        </div>
    );
});

export default Counter;