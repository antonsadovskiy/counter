import React, {ChangeEvent, FC} from 'react';
import {InputErrorType, setErrorAC, setInputErrorAC} from "../../../redux/errors/errorsReducer";
import s from "./Input.module.css";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";

type InputPropsType = {
    inputType: "max" | "min"
    value: number
    changeValue: (value: number) => void
    oppositeValue: number
}

const Input: FC<InputPropsType> = React.memo((
    {
        inputType,
        value,
        changeValue,
        oppositeValue,
    }
) => {

    const inputError = useSelector<AppStateType, InputErrorType>(state => state.errors.inputError)
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        trackError(value, oppositeValue)
        changeValue(value)
    }

    const trackError = (value: number, oppositeValue: number) => {
        switch (inputType) {
            case 'max':
                if (value < oppositeValue) {
                    dispatch(setErrorAC('max value lower than start'))
                    dispatch(setInputErrorAC({min: false, max: true}))
                } else if (value < 0) {
                    dispatch(setErrorAC('max value must be positive'))
                    dispatch(setInputErrorAC({min: false, max: true}))
                } else if (value === oppositeValue) {
                    dispatch(setInputErrorAC({min: true, max: true}))
                } else if (oppositeValue < 0) {
                    dispatch(setErrorAC('start value must be positive'))
                    dispatch(setInputErrorAC({min: true, max: false}))
                } else {
                    dispatch(setErrorAC(''))
                    dispatch(setInputErrorAC({min: false, max: false}))
                }
                break
            case 'min':
                if (value > oppositeValue) {
                    dispatch(setErrorAC('start value more than max'))
                    dispatch(setInputErrorAC({min: true, max: false}))
                } else if (value < 0) {
                    dispatch(setErrorAC('start value must be positive'))
                    dispatch(setInputErrorAC({min: true, max: false}))
                } else if (value === oppositeValue) {
                    dispatch(setInputErrorAC({min: true, max: true}))
                } else {
                    dispatch(setErrorAC(''))
                    dispatch(setInputErrorAC({min: false, max: false}))
                }
                break
        }
    }

    return (
        <div className={s.inputContainer}>
            <TextField error={inputType === 'max' ? inputError.max : inputError.min}
                       size={'medium'}
                       label={inputType === 'max' ? 'max value' : 'start value'}
                       type="number"
                       value={value}
                       onChange={onChangeHandler}/>
        </div>
    );
});

export default Input;