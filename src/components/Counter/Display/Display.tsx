import React, {FC} from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    count: number
    error: string
    setButtonIsClicked: boolean
    isCountEqualsToMaxValue: boolean
}

const Display:FC<DisplayPropsType> = ({
    count,
    error,
    setButtonIsClicked,
    isCountEqualsToMaxValue
    }
) => {

    const errorValue = style.display + (isCountEqualsToMaxValue? " " + style.errorValue : "")

    return (
        <div className={style.displayContainer}>
            <span className={errorValue}>
                {error? error : setButtonIsClicked? count : "enter values and press set"}
            </span>
        </div>
    );
};

export default Display;