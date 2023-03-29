/**
 * @component
 * Компонент-Button
 * @props
 * onchange - принимает функцию родиделя
 * classname - доп класс для компонента
 * text - текст для кнопки
 * @returns
 * возвращает button с дефолтными стилями
 */

import styleButton from './Button.module.css'
import cn from 'classnames'
export const Button = ({onchange,classname,text}) => {
    return (
        <button onClick={onchange} className={cn(styleButton.btn,classname)}>
            {text}
        </button>
    )
}