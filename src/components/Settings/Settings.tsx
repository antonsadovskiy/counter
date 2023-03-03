import React, {FC} from 'react';
import MaxValueInput from "./MaxValueInput/MaxValueInput";
import StartValueInput from "./StartValueInput/StartValueInput";
import s from './Settings.module.css'
import Button from "../Button/Button";
import {ErrorState} from "../../App";

export type SettingPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    changeStartValue: (value: number) => void
    setStartAsCount: () => void
    isButtonNotClicked: boolean
    disableSetButton: boolean
    defineError: (value: string) => void
    inputError: ErrorState
    setInputError: (errState: ErrorState) => void
}

const Settings:FC<SettingPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        changeStartValue,
        setStartAsCount,
        isButtonNotClicked,
        disableSetButton,
        defineError,
        inputError,
        setInputError
    }
) => {

    const onClickSetHandler = () => {
        setStartAsCount()
    }

    return (
        <div className={s.settingsContainer}>
            <MaxValueInput maxValue={maxValue}
                           changeMaxValue={changeMaxValue}
                           startValue={startValue}
                           defineError={defineError}
                           inputError={inputError}
                           setInputError={setInputError}/>
            <StartValueInput startValue={startValue}
                             changeStartValue={changeStartValue}
                             maxValue={maxValue}
                             defineError={defineError}
                             inputError={inputError}
                             setInputError={setInputError}/>
            <div className={s.buttonContainer}>
                <Button name={'set'}
                        callback={onClickSetHandler}
                        isButtonNotClicked={!isButtonNotClicked}
                        disableSetButton={disableSetButton}/>
            </div>
        </div>
    );
};

export default Settings;