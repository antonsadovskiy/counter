import {settingsReducer} from "../settings/settingsReducer";
import {counterReducer} from "../counter/counterReducer";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {errorsReducer} from "../errors/errorsReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../../utils/localStorage";

const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer,
    errors: errorsReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings,
        errors: store.getState().errors
    })
})


export type AppStateType = ReturnType<typeof rootReducer>