import {changeSettingsValueAC, settingsReducer, SettingsStateType} from "./settingsReducer";

let startState: SettingsStateType

beforeEach(() => {
    startState = {
        maxValue: 1,
        startValue: 0
    }
})

test('should change max value', () => {
    const newMaxValue = 10
    const action = changeSettingsValueAC('maxValue', newMaxValue)
    const endState = settingsReducer(startState, action)

    expect(endState.maxValue).toBe(newMaxValue)
    expect(endState.startValue).toBe(startState.startValue)
})

test('should change start value', () => {
    const newStartValue = 4
    const action = changeSettingsValueAC('startValue', newStartValue)
    const endState = settingsReducer(startState, action)

    expect(endState.maxValue).toBe(startState.maxValue)
    expect(endState.startValue).toBe(newStartValue)
})