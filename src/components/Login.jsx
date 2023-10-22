import { useState } from "react";
import axios from "axios";
import UserLists from '../UserLists'


export default function Login() {
    const [token, setToken] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmitForm(event) {
        event.preventDefault()
        
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username:username, password: password}
        ).then(response => {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
        })
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        setToken("")
    }

    if(!token)
        return(
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder="username" value={username} onChange={handleChangeUsername} />
                <input type="password" placeholder="password" value={password} onChange={handleChangePassword} />
                <button>Entrar</button>
            </form>
        )
    return (
        <>
            <UserLists />
            <button onClick={handleLogout}>Sair</button>
        </>
    )
}
