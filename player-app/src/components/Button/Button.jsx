import styleButton from './Button.module.css'
import cn from 'classnames'
export const Button = ({onchange,classname,text}) => {
    return (
        <button onClick={onchange} className={cn(styleButton.btn,classname)}>
            {text}
        </button>
    )
}