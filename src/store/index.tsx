import { combineReducers, createStore } from "redux"
import walletReducer from "./reducer"

export interface iStore {
    wallet: {
        total: 0
    }
}

const reducers = combineReducers({
    wallet: walletReducer
})

const store = createStore(reducers)

export default store