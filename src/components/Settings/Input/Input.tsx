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

const Input: FC<InputPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        changeStartValue,
        error,
        trackError,
    }
) => {
    return (
        <div className={style.inputContainer}>
            <MaxValue maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      startValue={startValue}
                      trackError={trackError}
                      error={error}/>
            <StartValue startValue={startValue}
                        changeStartValue={changeStartValue}
                        maxValue={maxValue}
                        trackError={trackError}
                        error={error}/>
        </div>
    );
};

export default Input;