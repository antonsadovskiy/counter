type SetStartAsCountAT = ReturnType<typeof setStartAsCountAC>
type IncCounterAT = ReturnType<typeof incCounterAC>
type ResetCounterAT = ReturnType<typeof resetCounterAC>

type ActionsType = SetStartAsCountAT | IncCounterAT | ResetCounterAT

export type CounterStateType = {
    counterValue: number
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
    return {
        type: 'SET-START-AS-COUNT',
        payload: {
            startValue
        }
    } as const
}
export const incCounterAC = () => {
    return {
        type: 'INC-COUNTER'
    } as const
}
export const resetCounterAC = (startValue: number) => {
    return {
        type: 'RESET-COUNTER',
        payload: {
            startValue
        }
    } as const
}