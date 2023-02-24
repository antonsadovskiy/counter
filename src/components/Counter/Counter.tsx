import React, {FC} from 'react';
import Button from "../Button/Button";
import style from './Counter.module.css'
import Display from "./Display/Display";

type CounterPropsType = {
    count: number
    incCounter: () => void
    resetCounter: () => void
    error: string
    buttonIsNotClicked: boolean
    disableIncButton: boolean
    disableResetButton: boolean
}

const Counter: FC<CounterPropsType> = (
    {
        count,
        incCounter,
        resetCounter,
        error,
        buttonIsNotClicked,
        disableIncButton,
        disableResetButton
    }
) => {

    const incCounterHandler = () => {
        incCounter()
    }
    const resetCounterHandler = () => {
        resetCounter()
    }

    return (
        <div className={style.counterContainer}>
            <Display count={count}
                     error={error}
                     buttonIsNotClicked={buttonIsNotClicked}
                     disableIncButton={disableIncButton}/>
            <div className={style.buttonContainer}>
                <Button name={'inc'}
                        callback={incCounterHandler}
                        error={error}
                        buttonIsNotClicked={buttonIsNotClicked}
                        disableIncButton={disableIncButton}/>
                <Button name={'reset'}
                        callback={resetCounterHandler}
                        error={error}
                        buttonIsNotClicked={buttonIsNotClicked}
                        disableResetButton={disableResetButton}/>

            </div>
        </div>
    );
};

export default Counter;