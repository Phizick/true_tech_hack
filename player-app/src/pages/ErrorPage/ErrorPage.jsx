/**
 * @component
 * Компонент-страница 404
 * @returns
 * возвращает разметку страницы и ссылку на роут /
 */


import stylesErrorPage from "./ErrorPage.module.css";
import { Link } from "react-router-dom";
import {Button} from "../../components/Button/Button";
export const ErrorPage = () => {
    return (
        <div className={stylesErrorPage.div}>
            <h1 className={stylesErrorPage.title}>404</h1>
            <p className={stylesErrorPage.text}>
                Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
                существует. Возможно она устарела, была удалена, или был введен неверный
                адрес в адресной строке
            </p>
            <Link className={stylesErrorPage.link} to="/">
               <Button classname={stylesErrorPage.btn} text="Перейти на главную"/>
            </Link>
        </div>
    )
}