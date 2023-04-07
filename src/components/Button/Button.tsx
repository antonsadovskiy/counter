import React, {FC} from 'react';
import s from './Button.module.css'
import {Button} from "@mui/material";

export type ButtonPropsType = {
    name: string
    callback: () => void
    disableIncButton?: boolean
    disableResetButton?: boolean
    disableSetButton?: boolean
    isButtonNotClicked: boolean
}

const MyButton:FC<ButtonPropsType> = React.memo((
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
        <Button className={s.button} variant={'outlined'} disabled={isDisable} onClick={callback}>{name}</Button>
    );
});

export default MyButton;