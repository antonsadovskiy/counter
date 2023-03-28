type SetIsButtonNotClickedActionType = ReturnType<typeof setIsButtonNotClickedAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>
type SetInputErrorActionType = ReturnType<typeof setInputErrorAC>

type ActionsType = SetIsButtonNotClickedActionType | SetErrorActionType | SetInputErrorActionType

export type InputErrorType = {
    min: boolean
    max: boolean
}

export type ErrorsStateType = {
    isButtonNotClicked: boolean
    error: string
    inputError: InputErrorType
}
const initialState: ErrorsStateType = {
    isButtonNotClicked: true,
    error: '',
    inputError: {
        min: false,
        max: false
    }
}

export const errorsReducer = (state: ErrorsStateType = initialState, action: ActionsType): ErrorsStateType => {
    switch (action.type) {
        case "SET-IS-BUTTON-NOT-CLICKED":
            return {...state, isButtonNotClicked: action.payload.value}
        case "SET-ERROR":
            return {...state, error: action.payload.error}
        case "SET-INPUT-ERROR":
            return {...state, inputError: {...state.inputError, min: action.payload.inputError.min, max: action.payload.inputError.max}}
        default:
            return state
    }
}

export const setIsButtonNotClickedAC = (value: boolean) => {
    return ({
        type: 'SET-IS-BUTTON-NOT-CLICKED',
        payload: {
            value
        }
    }) as const
}
export const setErrorAC = (error: string) => {
    return ({
        type: 'SET-ERROR',
        payload: {
            error
        }
    }) as const
}
export const setInputErrorAC = (inputError: InputErrorType) => {
    return ({
        type: 'SET-INPUT-ERROR',
        payload: {
            inputError
        }
    }) as const
}