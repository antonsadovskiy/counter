import {settingsReducer} from "../settings/settingsReducer";
import {counterReducer} from "../counter/counterReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {errorsReducer} from "../errors/errorsReducer";

const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer,
    errors: errorsReducer
})

export const store = createStore(rootReducer)
export type AppStoreType = ReturnType<typeof rootReducer>