import React, {FC} from 'react';
import style from './Settings.module.css'
import Button from "../Button/Button";
import Input from "./Input/Input";

type SettingsPropsType = {
    maxValue: number
    changeMaxValue: (value: number) => void
    startValue: number
    changeStartValue: (value: number) => void
    setStartValueAsCount: () => void
    error: string
    trackError: (error: string) => void
    buttonIsNotClicked: boolean
    clickSetButtonHandler: () => void
}

const Settings: FC<SettingsPropsType> = (
    {
        maxValue,
        changeMaxValue,
        startValue,
        changeStartValue,
        setStartValueAsCount,
        trackError,
        error,
        buttonIsNotClicked,
        clickSetButtonHandler,
    }
) => {

    const onClickSetStartValue = () => {
        setStartValueAsCount()
        clickSetButtonHandler()
    }

    return (
        <div className={style.settingsContainer}>
            <Input maxValue={maxValue}
                   changeMaxValue={changeMaxValue}
                   startValue={startValue}
                   changeStartValue={changeStartValue}
                   trackError={trackError}
                   error={error}/>
            <div className={style.buttonContainer}>
                <Button name={"set"}
                        callback={onClickSetStartValue}
                        error={error}
                        buttonIsNotClicked={!buttonIsNotClicked}/>
            </div>
        </div>
    );
};

export default Settings;