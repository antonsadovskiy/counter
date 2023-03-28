import React, {ChangeEvent, FC} from 'react';
import s from './StartValueInput.module.css'
import {ErrorState} from "../../../App";
import {setErrorAC, setInputErrorAC} from "../../../redux/errors/errorsReducer";
import {useDispatch} from "react-redux";

export type StartValueInputPropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    inputError: ErrorState
}

const StartValueInput:FC<StartValueInputPropsType> = (
    {
        startValue,
        changeStartValue,
        maxValue,
        inputError
    }
) => {

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = Number(e.currentTarget.value)
        trackError(startValue, maxValue)
        changeStartValue(startValue)
    }

    const trackError = (start: number, max: number) => {
        if (start > max){
            dispatch(setErrorAC('start value more than max'))
            dispatch(setInputErrorAC({min: true, max: false}))
        } else if (start < 0){
            dispatch(setErrorAC('start value must be positive'))
            dispatch(setInputErrorAC({min: true, max: false}))
        } else if (start === max){
            dispatch(setInputErrorAC({min: true, max: true}))
        } else {
            dispatch(setErrorAC(''))
            dispatch(setInputErrorAC({min: false, max: false}))
        }
    }

    const inputClass = s.input + (inputError.min? ' ' + s.errorInput : '')

    return (
        <div className={s.inputContainer}>
            <h3>start value: </h3>
            <input className={inputClass} type="number" value={startValue} onChange={onChangeHandler} />
        </div>
    );
};

export default StartValueInput;