import { useState } from "react"
import { useSelector } from "react-redux"
import store, { iStore } from "../store"
import { addMoneyAction, removeMoneyAction, themeAction } from "../store/actions"
import { Button, Div, Input } from "./styled-components"

const DigitalWallet: React.FC = () => {
    const [money, setMoney] = useState<string>()
    const { total } = useSelector((store: iStore) => store.wallet)
    const { currentTheme } = useSelector((store: iStore) => store.theme)

    const handleClickAddButton = () => {
        if (money) {
            store.dispatch(addMoneyAction(Number(money)))
        }
    }

    const handleClickRemoveButton = () => {
        if (money) {
            store.dispatch(removeMoneyAction(Number(money)))
        }
    }

    const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setMoney(evt.currentTarget.value)
        console.log(money)
    }

    const handleClickChangeTheme = () => {
        const actualTheme = currentTheme === "dark" ? "light" : "dark"
        store.dispatch(themeAction(actualTheme))
        console.log(currentTheme)
    }

    return (
        <Div>
            <label htmlFor="valor">Digite um valor:</label> <br />
            <Input theme={currentTheme} type="text" id="valor" onChange={handleChangeInput} /> <br />
            <Button theme={currentTheme} onClick={handleClickRemoveButton}>Sacar</Button>
            <Button theme={currentTheme} onClick={handleClickAddButton}>Depositar</Button>
            <div>Você tem R${total}</div>
            <Button theme={currentTheme} onClick={handleClickChangeTheme}>{currentTheme === "dark" ? "Alterar para o tema claro" : "Alterar para o tema escuro"}</Button>
        </Div>
    )
}

export default DigitalWallet