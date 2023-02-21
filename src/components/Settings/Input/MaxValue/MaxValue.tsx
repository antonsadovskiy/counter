import React, {ChangeEvent, FC} from 'react';
import style from './MaxValue.module.css'

type MaxValuePropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    trackError: (error: string) => void
    error: string
}

const MaxValue:FC<MaxValuePropsType> = ({
    maxValue,
    changeMaxValue,
    startValue,
    trackError,
    error
    }
) => {

    const defineError = (max: number, start: number) => {
        if (max < 0) {
            trackError('incorrect value')
        } else if (max === start){
            trackError('max value equals to start value')
        } else if (max < start){
            trackError('max value lower than start value')
        } else {
            trackError('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = JSON.parse(e.currentTarget.value)
        changeMaxValue(maxValue)
        defineError(maxValue, startValue)
    }

    const inputClass = error? style.errorInput : style.input

    return (
        <div className={style.maxValueContainer}>
            <h3>max value:</h3>
            <input className={inputClass} type={'number'} value={maxValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default MaxValue;