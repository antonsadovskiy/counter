import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    error: string
    setButtonIsClicked: boolean
    isCountEqualsToMaxValue?: boolean
}

const Button:FC<ButtonPropsType> = ({
    name,
    callback,
    error,
    setButtonIsClicked,
    isCountEqualsToMaxValue,
    }
) => {

    const onClickHandler = () => {
        callback()
    }

    const errorType = !!error || setButtonIsClicked || isCountEqualsToMaxValue

    return (
        <div className={style.button}>
            <button disabled={errorType} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;