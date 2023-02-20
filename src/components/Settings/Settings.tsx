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
    buttonIsClicked: boolean
    clickSetButtonHandler: () => void
}

const Settings:FC<SettingsPropsType> = (props) => {

    const onClickHandler = () => {
        props.setStartValueAsCount()
        props.clickSetButtonHandler()
    }

    return (
        <div className={style.settingsContainer}>
            <Input maxValue={props.maxValue}
                   changeMaxValue={props.changeMaxValue}
                   startValue={props.startValue}
                   changeStartValue={props.changeStartValue}
                   trackError={props.trackError}
                   error={props.error}/>
            <div className={style.buttonContainer}>
                <Button name={"set"}
                        callback={onClickHandler}
                        error={props.error}
                        buttonIsClicked={props.buttonIsClicked}/>
            </div>
        </div>
    );
};

export default Settings;