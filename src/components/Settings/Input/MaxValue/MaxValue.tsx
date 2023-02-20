import React, {ChangeEvent, FC} from 'react';
import style from './MaxValue.module.css'

type MaxValuePropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    trackError: (error: string) => void
    error: string
}

const MaxValue:FC<MaxValuePropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const max = JSON.parse(e.currentTarget.value)
        props.changeMaxValue(max)
        if (max < 0) {
            props.trackError('incorrect value')
        } else if (max > props.startValue){
            props.trackError('')
        } else if (max === props.startValue){
            props.trackError('max value equals to start value')
        } else if (max < props.startValue){
            props.trackError('max value lower than start value')
        }
    }

    const inputClass = props.error? style.errorInput : style.input

    return (
        <div className={style.maxValueContainer}>
            <h3>max value:</h3>
            <input className={inputClass} type={'number'} value={props.maxValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default MaxValue;