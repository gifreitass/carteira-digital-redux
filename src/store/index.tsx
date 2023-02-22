import { combineReducers, createStore } from "redux"
import walletReducer, { pageTheme } from "./reducer"

export interface iStore {
    wallet: {
        total: 0
    },
    theme: {
        currentTheme: "dark"
    }
}

const reducers = combineReducers({
    wallet: walletReducer,
    theme: pageTheme
})

const store = createStore(reducers)

export default store