import React, {FC} from 'react';
import Button from "../Button/Button";
import style from './Counter.module.css'
import Display from "./Display/Display";

type CounterPropsType = {
    count: number
    incCounter: () => void
    resetCounter: () => void
    error: string
    setButtonIsClicked: boolean
    isCountEqualsToMaxValue: boolean
}

const Counter:FC<CounterPropsType> = ({
    count,
    incCounter,
    resetCounter,
    error,
    setButtonIsClicked,
    isCountEqualsToMaxValue
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
                     setButtonIsClicked={setButtonIsClicked}
                     isCountEqualsToMaxValue={isCountEqualsToMaxValue}/>
            <div className={style.buttonContainer}>
                <Button name={'inc'}
                        callback={incCounterHandler}
                        error={error}
                        setButtonIsClicked={!setButtonIsClicked}
                        isCountEqualsToMaxValue={isCountEqualsToMaxValue}/>
                <Button name={'reset'}
                        callback={resetCounterHandler}
                        error={error}
                        setButtonIsClicked={!setButtonIsClicked}/>
            </div>
        </div>
    );
};

export default Counter;