import React, {ChangeEvent, FC} from 'react';
import s from '../Input.module.css'
import {InputErrorType, setErrorAC, setInputErrorAC} from "../../../redux/errors/errorsReducer";
import {useDispatch} from "react-redux";
import {TextField} from "@mui/material";

export type StartValueInputPropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    inputError: InputErrorType
}

const StartValueInput: FC<StartValueInputPropsType> = React.memo((
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
        if (start > max) {
            dispatch(setErrorAC('start value more than max'))
            dispatch(setInputErrorAC({min: true, max: false}))
        } else if (start < 0) {
            dispatch(setErrorAC('start value must be positive'))
            dispatch(setInputErrorAC({min: true, max: false}))
        } else if (start === max) {
            dispatch(setInputErrorAC({min: true, max: true}))
        } else {
            dispatch(setErrorAC(''))
            dispatch(setInputErrorAC({min: false, max: false}))
        }
    }

    return (
        <div className={s.inputContainer}>
            <TextField error={inputError.min}
                       size={'medium'}
                       label="start value"
                       type="number"
                       value={startValue}
                       onChange={onChangeHandler}/>
        </div>
    );
});

export default StartValueInput;