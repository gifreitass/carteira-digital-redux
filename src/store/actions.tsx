export const addMoneyAction = (money: number) => {
    return {
        type: "ADD_MONEY",
        payload: money
    }
}

export const removeMoneyAction = (money: number) => {
    return {
        type: "REMOVE_MONEY",
        payload: money
    }
}