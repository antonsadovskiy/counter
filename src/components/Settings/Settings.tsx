import React, {FC, useCallback} from 'react';
import s from './Settings.module.css'
import {changeSettingsValueAC} from "../../redux/settings/settingsReducer";
import {useDispatch} from "react-redux";
import {setStartAsCountAC} from "../../redux/counter/counterReducer";
import {setIsButtonNotClickedAC} from "../../redux/errors/errorsReducer";
import MyButton from "../Button/Button";
import Input from "./Input/Input";

export type SettingPropsType = {
    maxValue: number
    startValue: number
    isButtonNotClicked: boolean
    disableSetButton: boolean
}

const Settings: FC<SettingPropsType> = React.memo((
    {
        maxValue,
        startValue,
        isButtonNotClicked,
        disableSetButton,
    }
) => {

    const dispatch = useDispatch()

    const changeMaxValue = useCallback((value: number) => {
        dispatch(changeSettingsValueAC('maxValue', Math.floor(value)))
        dispatch(setIsButtonNotClickedAC(true))
    }, [dispatch])

    const changeStartValue = useCallback((value: number) => {
        dispatch(changeSettingsValueAC('startValue', Math.floor(value)))
        dispatch(setIsButtonNotClickedAC(true))
    }, [dispatch])

    const setStartAsCount = useCallback(() => {
        dispatch(setStartAsCountAC(startValue))
        dispatch(setIsButtonNotClickedAC(false))
    }, [dispatch, startValue])

    return (
        <div className={s.settingsContainer}>
            <div className={s.inputsContainer}>
                <Input inputType={'max'}
                       value={maxValue}
                       changeValue={changeMaxValue}
                       oppositeValue={startValue}/>
                <Input inputType={'min'}
                       value={startValue}
                       changeValue={changeStartValue}
                       oppositeValue={maxValue}/>
            </div>
            <div className={s.buttonContainer}>
                <MyButton name={'set'}
                          callback={setStartAsCount}
                          isButtonNotClicked={!isButtonNotClicked}
                          disableSetButton={disableSetButton}/>
            </div>
        </div>
    );
});

export default Settings;