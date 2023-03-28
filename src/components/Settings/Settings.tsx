import React, {FC} from 'react';
import MaxValueInput from "./MaxValueInput/MaxValueInput";
import StartValueInput from "./StartValueInput/StartValueInput";
import s from './Settings.module.css'
import Button from "../Button/Button";
import {changeSettingsValueAC, SettingsStateType} from "../../redux/settings/settingsReducer";
import {useDispatch} from "react-redux";
import {setStartAsCountAC} from "../../redux/counter/counterReducer";
import {ErrorsStateType, setIsButtonNotClickedAC} from "../../redux/errors/errorsReducer";

export type SettingPropsType = {
    settings: SettingsStateType
    errors: ErrorsStateType
    disableSetButton: boolean
}

const Settings:FC<SettingPropsType> = (
    {
        settings,
        errors,
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
        dispatch(setStartAsCountAC(settings.startValue))
        dispatch(setIsButtonNotClickedAC(false))
    }

    return (
        <div className={s.settingsContainer}>
            <MaxValueInput maxValue={settings.maxValue}
                           changeMaxValue={changeMaxValue}
                           startValue={settings.startValue}
                           inputError={errors.inputError}/>
            <StartValueInput startValue={settings.startValue}
                             changeStartValue={changeStartValue}
                             maxValue={settings.maxValue}
                             inputError={errors.inputError}/>
            <div className={s.buttonContainer}>
                <Button name={'set'}
                        callback={setStartAsCount}
                        isButtonNotClicked={!errors.isButtonNotClicked}
                        disableSetButton={disableSetButton}/>
            </div>
        </div>
    );
};

export default Settings;