import styleLoginPage from './LoginPage.module.css';
import {Input} from "../../Input/Input";
import {Button} from "../../components/Button/Button";
import {Link,useHistory,Redirect} from "react-router-dom";
import {useState} from "react";
export const LoginPage = () => {
    const logU = window.localStorage.getItem('login')
    const passU = window.localStorage.getItem('password')
    const history = useHistory()
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const auth = (e) => {
        e.preventDefault()
        if(login === 'test' && password === 'test') {
            window.localStorage.setItem('login', login)
            window.localStorage.setItem('password',password)
            history.replace({pathname: '/'})
        }
    }
    if(logU && passU) {
        return <Redirect to="/"/>
    }

    return (
        <div className={styleLoginPage.page}>
            <div className={styleLoginPage.auth}>
                <h2 className={styleLoginPage.text}>Авторизация</h2>
                <form className={styleLoginPage.form} action="#">
                    <label className={styleLoginPage.label} htmlFor="login">Логин</label>
                        <Input value={login} onChange={(e) => setLogin(e.target.value)} type="text" id="login"/>
                    <label className={styleLoginPage.label} htmlFor="password">Пароль</label>
                    <Input alue={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password"/>
                    <Button onchange={auth} classname={styleLoginPage.authBtn} text="Авторизация"/>
                    <Link className={styleLoginPage.link} to="/registration">Зарегистрироваться</Link>
                </form>
            </div>
        </div>

    )
}