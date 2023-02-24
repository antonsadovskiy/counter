import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    error: string
    buttonIsNotClicked?: boolean
    disableIncButton?: boolean
}

const Button: FC<ButtonPropsType> = (
    {
        name,
        callback,
        error,
        buttonIsNotClicked,
        disableIncButton
    }
) => {

    const onClickHandler = () => {
        callback()
    }

    const errorType = error !== '' || buttonIsNotClicked || disableIncButton

    return (
        <div className={style.button}>
            <button disabled={errorType} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;