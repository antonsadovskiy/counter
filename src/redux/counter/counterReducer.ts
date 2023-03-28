export type SetCounterValueActionType = ReturnType<typeof setCounterValueAC>
export type SetStartAsCountActionType = ReturnType<typeof setStartAsCountAC>
export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>

export type ActionsType = SetCounterValueActionType | SetStartAsCountActionType | ResetCounterActionType| IncCounterActionType

export type CounterStateType = {
    counterValue: number
}
const initialState: CounterStateType = {
    counterValue: 0
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "SET-COUNTER-VALUE":
            return {...state, counterValue: action.payload.counterValue}
        case "SET-START-AS-COUNT":
            return {...state, counterValue: action.payload.startValue}
        case 'INC-COUNTER':
            return {...state, counterValue: state.counterValue + 1}
        case "RESET-COUNTER":
            return {...state, counterValue: action.payload.startValue}
        default:
            return state
    }
}

export const setCounterValueAC = (counterValue: number) => {
    return ({
        type: 'SET-COUNTER-VALUE',
        payload: {
            counterValue
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
export const resetCounterAC = (startValue: number) => {
    return ({
        type: 'RESET-COUNTER',
        payload: {
            startValue
        }
    }) as const
}