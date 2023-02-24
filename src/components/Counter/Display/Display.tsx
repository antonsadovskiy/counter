import React, {FC} from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    count: number
    error: string
    buttonIsNotClicked: boolean
    disableIncButton: boolean
}

const Display: FC<DisplayPropsType> = (
    {
        count,
        error,
        buttonIsNotClicked,
        disableIncButton
    }
) => {

    const errorValue = style.display + (!buttonIsNotClicked && disableIncButton ? " " + style.errorValue : "")

    return (
        <div className={style.displayContainer}>
            <span className={errorValue}>
                {error ? error : !buttonIsNotClicked ? count : "enter values and press set"}
            </span>
        </div>
    );
};

export default Display;