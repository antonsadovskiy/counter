import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    error: string
    buttonIsClicked: boolean
    isCountEqualsToMaxValue?: boolean
}

const Button:FC<ButtonPropsType> = ({name, ...props}) => {

    const onClickHandler = () => {
        props.callback()
    }

    const setButtonIsClicked = props.buttonIsClicked
    const countValueEqualsToMax = props.isCountEqualsToMaxValue
    const error = !!props.error || setButtonIsClicked || countValueEqualsToMax

    return (
        <div className={style.button}>
            <button disabled={error} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;