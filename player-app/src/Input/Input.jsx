import styleInput from './Input.module.css'
export const Input = ({...rest}) => {
    return (
        <>
        <input className={styleInput.input} {...rest} />
        </>
    )
}