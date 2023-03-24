import {ValuesType} from "../../App";

export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type SetStartAsCountActionType = ReturnType<typeof setStartAsCountAC>
export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>

export type ActionsType = ChangeMaxValueActionType
    | ChangeStartValueActionType | SetStartAsCountActionType
    | ResetCounterActionType| IncCounterActionType

export const counterReducer = (state: ValuesType, action: ActionsType): ValuesType => {
    switch (action.type) {
        case "CHANGE-MAX-VALUE":
            return {...state, maxValue: action.payload.maxValue}
        case "CHANGE-START-VALUE":
            return {...state, startValue: action.payload.startValue}
        case "SET-START-AS-COUNT":
            return {...state, counterValue: action.payload.startValue}
        case 'INC-COUNTER':
            return {...state, counterValue: state.counterValue + 1}
        case "RESET-COUNTER":
            return {...state, counterValue: state.startValue}
        default:
            return state
    }
}

export const changeMaxValueAC = (maxValue: number) => {
    return ({
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue
        }
    }) as const
}
export const changeStartValueAC = (startValue: number) => {
    return ({
        type: 'CHANGE-START-VALUE',
        payload: {
            startValue
        }
    }) as const
}
export const setStartAsCountAC = (startValue: number) => {
    return ({
        type: 'SET-START-AS-COUNT',
        payload: {
            startValue
        }
    }) as const
}
export const incCounterAC = () => {
    return ({
        type: 'INC-COUNTER'
    }) as const
}
export const resetCounterAC = () => {
    return ({
        type: 'RESET-COUNTER'
    }) as const
}