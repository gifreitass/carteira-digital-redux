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

export const themeAction = (actualTheme: string) => {
    return {
        type: "CHANGE_THEME",
        payload: actualTheme
    }
}