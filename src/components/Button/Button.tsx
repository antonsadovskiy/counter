import React, {FC} from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
    name: string
    callback: () => void
    disableIncButton?: boolean
    disableResetButton?: boolean
    disableSetButton?: boolean
    isButtonNotClicked: boolean
}

const Button:FC<ButtonPropsType> = (
    {
        name,
        callback,
        disableIncButton,
        disableResetButton,
        disableSetButton,
        isButtonNotClicked,
    }
) => {

    const isDisable = disableSetButton || isButtonNotClicked || disableIncButton || disableResetButton

    return (
        <button className={s.button} disabled={isDisable} onClick={callback}>{name}</button>
    );
};

export default Button;