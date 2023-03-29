import stylesHeader from './Header.module.css'
import img from '../../images/Group.png'
import {Input} from "../../Input/Input";

export const Header = () => {
    return (
        <div className={stylesHeader.container}>
            <img className={stylesHeader.logo} src={img} alt={'logo'}/>
            <ul className={stylesHeader.nav}>
                <li className={stylesHeader.text}>Главная</li>
                <li className={stylesHeader.text}>Телеканалы</li>
                <li className={stylesHeader.text}>Фильтры</li>
                <li className={stylesHeader.text}>Сериалы</li>
            </ul>
            <Input className={stylesHeader.input} value={'Поиск'} type="text"/>
        </div>
    )
}
