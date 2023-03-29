/**
 * @component
 * Компонент-Input
 * @props
 * rest - доп аттрибуты для input
 * @returns
 * возвращает input с дефолтными стилями
 */

import styleInput from "./Input.module.css";
export const Input = ({ ...rest }) => {
  return (
    <>
      <input className={styleInput.input} {...rest} />
    </>
  );
};
