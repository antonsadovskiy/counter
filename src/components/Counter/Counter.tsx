import React, {FC} from 'react';
import Button from "../Button/Button";
import style from './Counter.module.css'
import Display from "./Display/Display";

type CounterPropsType = {
    count: number
    incCounter: () => void
    resetCounter: () => void
    error: string
    buttonIsClicked: boolean
    isCountEqualsToMaxValue: boolean
}

const Counter:FC<CounterPropsType> = (props) => {
    return (
        <div className={style.counterContainer}>
            <Display count={props.count}
                     error={props.error}
                     buttonIsClicked={props.buttonIsClicked}
                     isCountEqualsToMaxValue={props.isCountEqualsToMaxValue}/>
            <div className={style.buttonContainer}>
                <Button name={'inc'}
                        callback={() => props.incCounter()}
                        error={props.error}
                        buttonIsClicked={!props.buttonIsClicked}
                        isCountEqualsToMaxValue={props.isCountEqualsToMaxValue}/>
                <Button name={'reset'}
                        callback={() => props.resetCounter()}
                        error={props.error}
                        buttonIsClicked={!props.buttonIsClicked}/>
            </div>
        </div>
    );
};

export default Counter;