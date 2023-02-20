import React, {FC} from 'react';
import style from './Input.module.css'
import MaxValue from "./MaxValue/MaxValue";
import StartValue from "./StartValue/StartValue";

type InputPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    changeStartValue: (value: number) => void
    error: string
    trackError: (error: string) => void
}

const Input:FC<InputPropsType> = (props) => {
    return (
        <div className={style.inputContainer}>
            <MaxValue maxValue={props.maxValue}
                      changeMaxValue={props.changeMaxValue}
                      startValue={props.startValue}
                      trackError={props.trackError}
                      error={props.error}/>
            <StartValue startValue={props.startValue}
                        changeStartValue={props.changeStartValue}
                        maxValue={props.maxValue}
                        trackError={props.trackError}
                        error={props.error}/>
        </div>
    );
};

export default Input;