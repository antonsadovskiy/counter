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
    trackError: (error: string) => void
    error: string
    setButtonIsClicked: boolean
    clickSetButtonHandler: () => void
}

const Settings:FC<SettingsPropsType> = ({
    maxValue,
    changeMaxValue,
    startValue,
    changeStartValue,
    setStartValueAsCount,
    trackError,
    error,
    setButtonIsClicked,
    clickSetButtonHandler,
    }
) => {

    const onClickHandler = () => {
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
                        callback={onClickHandler}
                        error={error}
                        setButtonIsClicked={setButtonIsClicked}/>
            </div>
        </div>
    );
};

export default Settings;