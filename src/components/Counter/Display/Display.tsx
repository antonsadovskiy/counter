import React, {FC} from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    count: number
    error: string
    buttonIsClicked: boolean
    isCountEqualsToMaxValue: boolean
}

const Display:FC<DisplayPropsType> = (props) => {

    const spanClass = style.display + (props.isCountEqualsToMaxValue? " " + style.error : " ");

    return (
        <div className={style.displayContainer}>
            <span className={spanClass}>
                {props.error? props.error : props.buttonIsClicked? props.count : "enter values and press set"}
            </span>
        </div>
    );
};

export default Display;