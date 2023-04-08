import React, {FC} from 'react';
import s from './Button.module.css'
import {Button} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlusOneIcon from '@mui/icons-material/PlusOne';

export type ButtonPropsType = {
    name: 'set' | 'inc' | 'reset'
    callback: () => void
    disableIncButton?: boolean
    disableResetButton?: boolean
    disableSetButton?: boolean
    isButtonNotClicked: boolean
}

const MyButton: FC<ButtonPropsType> = React.memo((
    {
        name,
        callback,
        disableIncButton,
        disableResetButton,
        disableSetButton,
        isButtonNotClicked,
    }
) => {

    const isDisable = disableSetButton || isButtonNotClicked || disableIncButton || disableResetButton

    const getIcon = (name: 'set' | 'inc' | 'reset') => {
        switch (name) {
            case "set":
                return 'set'
            case "inc":
                return <PlusOneIcon/>
            case "reset":
                return <RestartAltIcon/>
        }
    }

    return (
        <Button className={s.button} variant={'outlined'} disabled={isDisable} onClick={callback}>
            {getIcon(name)}
        </Button>
    );
});

export default MyButton;