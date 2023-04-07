import React, {FC, useCallback} from 'react';
import MaxValueInput from "./MaxValueInput/MaxValueInput";
import StartValueInput from "./StartValueInput/StartValueInput";
import s from './Settings.module.css'
import {changeSettingsValueAC} from "../../redux/settings/settingsReducer";
import {useDispatch} from "react-redux";
import {setStartAsCountAC} from "../../redux/counter/counterReducer";
import {InputErrorType, setIsButtonNotClickedAC} from "../../redux/errors/errorsReducer";
import MyButton from "../Button/Button";

export type SettingPropsType = {
    maxValue: number
    startValue: number
    isButtonNotClicked: boolean
    inputError: InputErrorType
    disableSetButton: boolean
}

const Settings:FC<SettingPropsType> = React.memo((
    {
        maxValue,
        startValue,
        isButtonNotClicked,
        inputError,
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
                <MyButton name={'set'}
                        callback={setStartAsCount}
                        isButtonNotClicked={!isButtonNotClicked}
                        disableSetButton={disableSetButton}/>
            </div>
        </div>
    );
});

export default Settings;