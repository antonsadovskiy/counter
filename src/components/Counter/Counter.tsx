import React, {FC} from 'react';
import Button from "../Button/Button";
import s from './Counter.module.css'
import Display from "./Display/Display";

export type CounterPropsType = {
    count: number
    incCounter: () => void
    resetCounter: () => void
    disableIncButton: boolean
    disableResetButton: boolean
    isButtonNotClicked: boolean
    error: string
    valuesAreEqual: boolean
}

const Counter: FC<CounterPropsType> = (
    {
        count,
        incCounter,
        resetCounter,
        disableIncButton,
        disableResetButton,
        isButtonNotClicked,
        error,
        valuesAreEqual
    }
) => {

    const onClickIncHandler = () => {
        incCounter()
    }
    const onClickResetHandler = () => {
        resetCounter()
    }

    return (
        <div className={s.counterContainer}>
            <Display count={count}
                     isButtonNotClicked={isButtonNotClicked}
                     disableIncButton={disableIncButton}
                     error={error}
                     valuesAreEqual={valuesAreEqual}/>
            <div className={s.buttonContainer}>
                <Button name={'inc'}
                        callback={onClickIncHandler}
                        disableIncButton={disableIncButton}
                        isButtonNotClicked={isButtonNotClicked}/>
                <Button name={'reset'}
                        callback={onClickResetHandler}
                        disableResetButton={disableResetButton}
                        isButtonNotClicked={isButtonNotClicked}/>
            </div>
        </div>
    );
};

export default Counter;