import { useState } from "react"
import { useSelector } from "react-redux"
import store, { iStore } from "../store"
import { addMoneyAction, removeMoneyAction } from "../store/actions"

const DigitalWallet: React.FC = () => {
    const [money, setMoney] = useState<string>()
    const { total } = useSelector((store: iStore) => store.wallet)

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

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setMoney(evt.currentTarget.value)
        console.log(money)
    }

    return (
        <div>
            <label htmlFor="valor">Digite um valor:</label> <br />
            <input type="text" id="valor" onChange={handleChange} /> <br />
            <button onClick={handleClickRemoveButton}>Sacar</button>
            <button onClick={handleClickAddButton}>Depositar</button>
            <div>Você tem R${total}</div>
        </div>
    )
}

export default DigitalWallet