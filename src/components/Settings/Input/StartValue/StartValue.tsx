import React, {ChangeEvent, FC} from 'react';
import style from './StartValue.module.css'

type StartValuePropsType = {
    startValue: number
    changeStartValue: (value: number) => void
    maxValue: number
    trackError: (error: string) => void
    error: string
}

const StartValue:FC<StartValuePropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const start = JSON.parse(e.currentTarget.value)
        props.changeStartValue(start)

        if (start < 0){
            props.trackError('incorrect value')
        } else if (start > props.maxValue){
            props.trackError('start value bigger than max value')
        } else if (start === props.maxValue){
            props.trackError('start value equals to max value')
        } else if (start < props.maxValue){
            props.trackError('')
        }
    }

    const inputClass = props.error? style.errorInput : style.input

    return (
        <div className={style.startValueContainer}>
            <h3>start value:</h3>
            <input className={inputClass} type={'number'} value={props.startValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default StartValue;