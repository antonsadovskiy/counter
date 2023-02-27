import React, {FC} from 'react';
import s from '../Counter.module.css'

export type DisplayPropsType = {
    count: number
    disableIncButton: boolean
    isButtonNotClicked: boolean
    error: string
    valuesAreEqual: boolean
}

const Display:FC<DisplayPropsType> = (
    {
        count,
        disableIncButton,
        isButtonNotClicked,
        error,
        valuesAreEqual
    }
) => {

    const spanStyle = s.normal + (disableIncButton? ' ' + s.red : '')

    const display = valuesAreEqual?
        <span>values are equal</span> : error?
        <span>{error}</span> : isButtonNotClicked?
            <span>enter values and press set</span> : <span className={spanStyle}>{count}</span>

    return (
        <div className={s.display}>
            {display}
        </div>
    );
};

export default Display;