import React, {ChangeEvent, FC} from 'react';
import s from './MaxValueInput.module.css'
import {useDispatch} from "react-redux";
import {InputErrorType, setErrorAC, setInputErrorAC} from "../../../redux/errors/errorsReducer";

export type MaxValueInputPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    inputError: InputErrorType
}

const MaxValueInput: FC<MaxValueInputPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        inputError,
    }
) => {

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = Number(e.currentTarget.value)
        trackError(maxValue, startValue)
        changeMaxValue(maxValue)
    }

    const trackError = (max: number, start: number) => {
        if (max < start){
            dispatch(setErrorAC('max value lower than start'))
            dispatch(setInputErrorAC({min: false, max: true}))
        } else if (max < 0){
            dispatch(setErrorAC('max value must be positive'))
            dispatch(setInputErrorAC({min: false, max: true}))
        } else if (start === max){
            dispatch(setInputErrorAC({min: true, max: true}))
        } else {
            dispatch(setErrorAC(''))
            dispatch(setInputErrorAC({min: false, max: false}))
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