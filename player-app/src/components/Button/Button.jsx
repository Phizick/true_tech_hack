import styleButton from './Button.module.css'
export const Button = ({onchange,text}) => {
    return (
        <button onClick={onchange} className={styleButton.btn}>
            {text}
        </button>
    )
}