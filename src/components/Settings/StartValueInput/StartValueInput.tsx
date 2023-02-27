import React, {ChangeEvent, FC} from 'react';
import s from './StartValueInput.module.css'
import {ErrorState} from "../../../App";

export type StartValueInputPropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    defineError: (value: string) => void
    inputError: ErrorState
    setInputError: (errState: ErrorState) => void
}

const StartValueInput:FC<StartValueInputPropsType> = (
    {
        startValue,
        changeStartValue,
        maxValue,
        defineError,
        inputError,
        setInputError
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = Number(e.currentTarget.value)
        trackError(startValue, maxValue)
        changeStartValue(startValue)
    }

    const trackError = (start: number, max: number) => {
        if (start > max){
            defineError('start value more than max')
            setInputError({...inputError, min: true, max: false})
        } else if (start < 0){
            defineError('start value must be positive')
            setInputError({...inputError, min: true, max: false})
        } else if (start === max){
            setInputError({...inputError, min: true, max: true})
        } else {
            defineError('')
            setInputError({...inputError, min: false, max: false})
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