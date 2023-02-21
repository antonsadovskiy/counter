import React, {ChangeEvent, FC} from 'react';
import style from './StartValue.module.css'

type StartValuePropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    trackError: (error: string) => void
    error: string
}

const StartValue:FC<StartValuePropsType> = ({
    startValue,
    changeStartValue,
    maxValue,
    trackError,
    error
    }
) => {

    const defineError = (start: number, max: number) => {
        if (start < 0) {
            trackError('incorrect value')
        } else if (start === max){
            trackError('start value equals to max value')
        } else if (start > max){
            trackError('start value bigger than max value')
        } else {
            trackError('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = JSON.parse(e.currentTarget.value)
        changeStartValue(startValue)
        defineError(startValue, maxValue)
    }

    const inputClass = error? style.errorInput : style.input

    return (
        <div className={style.startValueContainer}>
            <h3>start value:</h3>
            <input className={inputClass} type={'number'} value={startValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default StartValue;