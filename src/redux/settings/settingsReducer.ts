export type ActionsType = ReturnType<typeof changeSettingsValueAC>
export type SettingType = 'maxValue' | 'startValue'

export type SettingsStateType = {
    maxValue: number,
    startValue: number
}
const initialState: SettingsStateType = {
    maxValue: 1,
    startValue: 0
}

export const settingsReducer = (state: SettingsStateType = initialState, action: ActionsType): SettingsStateType => {
    switch (action.type) {
        case "CHANGE-VALUE":
            return {...state, [action.payload.settingType]: action.payload.value}
        default:
            return state
    }
}

export const changeSettingsValueAC = (settingType: SettingType, value: number) => {
    return ({
        type: 'CHANGE-VALUE',
        payload: {
            settingType,
            value
        }
    })
}