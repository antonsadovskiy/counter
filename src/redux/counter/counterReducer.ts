export type SetStartAsCountActionType = ReturnType<typeof setStartAsCountAC>
export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResetCounterActionType = ReturnType<typeof resetCounterAC>

export type ActionsType =
    | SetStartAsCountActionType
    | ResetCounterActionType
    | IncCounterActionType

export type CounterStateType = {
    counterValue: number
}

const getCountFromLS = () => {
    const count = localStorage.getItem('counterValue')
    return count ? JSON.parse(count ?? '') : 0
}

const initialState: CounterStateType = {
    counterValue: 0
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
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