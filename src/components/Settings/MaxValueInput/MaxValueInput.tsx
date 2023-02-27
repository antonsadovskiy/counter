import React, {ChangeEvent, FC} from 'react';
import s from './MaxValueInput.module.css'
import {ErrorState} from "../../../App";

export type MaxValueInputPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    defineError: (value: string) => void
    inputError: ErrorState
    setInputError: (errState: ErrorState) => void
}

const MaxValueInput: FC<MaxValueInputPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        defineError,
        inputError,
        setInputError
    }
) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = Number(e.currentTarget.value)
        trackError(maxValue, startValue)
        changeMaxValue(maxValue)
    }

    const trackError = (max: number, start: number) => {
        if (max < start){
            defineError('max value lower than start')
            setInputError({...inputError, max: true, min: false})
        } else if (max < 0){
            defineError('max value must be positive')
            setInputError({...inputError, max: true, min: false})
        } else if (start === max){
            setInputError({...inputError, max: true, min: true})
        } else {
            defineError('')
            setInputError({...inputError, max: false, min: false})
        }
    }

    const inputClass = s.input + (inputError.max? ' ' + s.errorInput : '')

    return (
        <div className={s.inputContainer}>
            <h3>max value: </h3>
            <input className={inputClass}
                   type="number"
                   value={maxValue}
                   onChange={onChangeHandler}/>
        </div>
)
    ;
};

export default MaxValueInput;