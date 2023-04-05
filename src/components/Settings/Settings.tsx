import React, {FC, useCallback, useEffect} from 'react';
import MaxValueInput from "./MaxValueInput/MaxValueInput";
import StartValueInput from "./StartValueInput/StartValueInput";
import s from './Settings.module.css'
import Button from "../Button/Button";
import {changeSettingsValueAC} from "../../redux/settings/settingsReducer";
import {useDispatch} from "react-redux";
import {setStartAsCountAC} from "../../redux/counter/counterReducer";
import {InputErrorType, setIsButtonNotClickedAC} from "../../redux/errors/errorsReducer";

export type SettingPropsType = {
    maxValue: number
    startValue: number
    isButtonNotClicked: boolean
    inputError: InputErrorType
    disableSetButton: boolean
}

const Settings:FC<SettingPropsType> = (
    {
        maxValue,
        startValue,
        isButtonNotClicked,
        inputError,
        disableSetButton,
    }
) => {

    const dispatch = useDispatch()

    const changeMaxValue = (value: number) => {
        dispatch(changeSettingsValueAC('maxValue', value))
        dispatch(setIsButtonNotClickedAC(true))
    }
    const changeStartValue = (value: number) => {
        dispatch(changeSettingsValueAC('startValue', value))
        dispatch(setIsButtonNotClickedAC(true))
    }
    const setStartAsCount = () => {
        dispatch(setStartAsCountAC(startValue))
        dispatch(setIsButtonNotClickedAC(false))
    }

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // },[maxValue, startValue])

    return (
        <div className={s.settingsContainer}>
            <MaxValueInput maxValue={maxValue}
                           changeMaxValue={changeMaxValue}
                           startValue={startValue}
                           inputError={inputError}/>
            <StartValueInput startValue={startValue}
                             changeStartValue={changeStartValue}
                             maxValue={maxValue}
                             inputError={inputError}/>
            <div className={s.buttonContainer}>
                <Button name={'set'}
                        callback={setStartAsCount}
                        isButtonNotClicked={!isButtonNotClicked}
                        disableSetButton={disableSetButton}/>
            </div>
        </div>
    );
};

const SettingsMemo = React.memo(Settings)
export default SettingsMemo;