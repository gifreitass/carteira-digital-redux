export interface iAction {
    type: string,
    payload: any
}

const WALLET_INITIAL_STATE = {
    total: 0
}

const walletReducer = (state = WALLET_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "ADD_MONEY":
            console.log(state)
            return {
                ...state,
                total: state.total + action.payload
            }

        case "REMOVE_MONEY":
            console.log(state)
            return {
                ...state,
                total: state.total - action.payload
            }

        default:
            return state
    }
}

export default walletReducer