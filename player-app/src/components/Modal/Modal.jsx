/**
 * @component
 * Modal - модальное окно при клике на настройки
 * Здесь происходит магия
 * Наложение масок на фильм
 * @returns
 * возвращает страницы модальное окно
 */

import styleModal from "./Modal.module.css";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setContrast,
  setLight,
  setMask,
  setNotScene,
  setOttenok,
} from "../../service/slices/maskSlice";
export const Modal = ({ active, closeModal }) => {
  const [video, setVideo] = useState("");
  const state = useSelector((state) => state.masks);
  const maskElement = document.querySelector("[name=radio-group]:checked");
  console.dir(document.querySelector(".video-react-video"))
  useEffect(() => {
    const video = document.querySelector(".video-react-video");
    setVideo(video);
    dispatch(setLight(window.localStorage.getItem("light")));
    dispatch(setContrast(window.localStorage.getItem("contrast")));
    dispatch(setOttenok(window.localStorage.getItem("ottenok")));
    dispatch(setMask(window.localStorage.getItem("mask")));
    dispatch(setNotScene(window.localStorage.getItem("not-scene")));
    console.dir(video)
    if (state?.mask === "tree") {
      video.style.filter = "contrast(140%) sepia(60%) saturate(160%)";
    }
    if (state?.mask === "normal") {
      video.style.filter = ` grayscale(${state?.ottenok}%) brightness(${state?.light}%) contrast(${state?.contrast}%)`;
    }
    if (state?.mask === "monochrom") {
      video.style.filter = "grayscale(140%)  brightness(110%) contrast(120%)";
    }
    if (state?.mask === "proto") {
      video.style.filter = "hue-rotate(359deg) saturate(150%)";
    }
    if (state?.mask === "detree") {
      video.style.filter = "hue-rotate(359deg) contrast(150%) brightness(110%)";
    }

  }, [state, video]);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const nasRef = useRef(null);
  const otRef = useRef(null);


  const lightChange = () => {
    inputRef.current.style.background =
      "linear-gradient(90deg, #FFF " +
      inputRef.current.value +
      "%, #40494F " +
      inputRef.current.value +
      "%)";
    video.style.filter = ` grayscale(${otRef.current.value}%) brightness(${inputRef.current.value}%) contrast(${nasRef.current.value}%)`;
  };
  const nasChange = () => {
    nasRef.current.style.background =
      "linear-gradient(90deg, #FFF " +
      nasRef.current.value +
      "%, #40494F " +
      nasRef.current.value +
      "%)";
    video.style.filter = ` grayscale(${otRef.current.value}%) brightness(${inputRef.current.value}%) contrast(${nasRef.current.value}%)`;
  };
  const otChange = () => {
    otRef.current.style.background =
      "linear-gradient(90deg, #FFF " +
      otRef.current.value +
      "%, #40494F " +
      otRef.current.value +
      "%)";
    video.style.filter = ` grayscale(${otRef.current.value}%) brightness(${inputRef.current.value}%) contrast(${nasRef.current.value}%)`;
  };

  const monochrom = () => {
    video.style.filter = "grayscale(140%) contrast(120%)";
  };

  const proto = () => {
    video.style.filter = "hue-rotate(359deg) saturate(150%)";
  };

  const tree = () => {
    video.style.filter = "contrast(140%) sepia(60%) saturate(160%)";
  };

  const deTree = () => {
    video.style.filter = "hue-rotate(359deg) contrast(150%)";
  };

  const normal = () => {
    video.style.filter = `brightness(${inputRef.current.value}%)`;
  };

  const saveSettings = (e) => {
    e.preventDefault();
    dispatch(setLight(inputRef.current.value));
    dispatch(setContrast(nasRef.current.value));
    dispatch(setOttenok(otRef.current.value));
    dispatch(setMask(maskElement.id));
    window.localStorage.setItem("light", inputRef.current.value);
    window.localStorage.setItem("contrast", nasRef.current.value);
    window.localStorage.setItem("ottenok", otRef.current.value);
    window.localStorage.setItem("mask", maskElement.id);
    if (document.querySelector("[name=not-scene]:checked")) {
      window.localStorage.setItem(
        "not-scene",
        document.querySelector("[name=not-scene]").value
      );
      dispatch(setNotScene(document.querySelector("[name=not-scene]").value));
    } else {
      window.localStorage.setItem("not-scene", "off");
      dispatch(setNotScene("off"));
    }
  };

  return (
    <div className={styleModal.overlay}>
      {active ? (
        <div className={styleModal.modal}>
          <h2 className={styleModal.title}>Настройки изображения</h2>
          <div className={styleModal.settings}>
            <p className={styleModal.settingP}>Спец.возможности</p>
            <form action="#">
              <div className={styleModal.radios}>
                <span className={styleModal.span}>
                  <input
                    onClick={normal}
                    type="radio"
                    id="normal"
                    defaultChecked="normal"
                    name="radio-group"
                  />
                  <label htmlFor="normal">Нормальные цвета</label>
                </span>
                <span className={styleModal.span}>
                  <input
                    onClick={monochrom}
                    type="radio"
                    id="monochrom"
                    name="radio-group"
                    defaultChecked={state.mask === "monochrom" ? true : false}
                  />
                  <label htmlFor="monochrom">Монохром</label>
                </span>
                <span className={styleModal.span}>
                  <input
                    onClick={proto}
                    type="radio"
                    id="proto"
                    defaultChecked={state.mask === "proto" ? true : false}
                    name="radio-group"
                  />
                  <label htmlFor="proto">Протаномалия</label>
                </span>
                <span className={styleModal.span}>
                  <input
                    onClick={tree}
                    type="radio"
                    id="tree"
                    name="radio-group"
                    defaultChecked={state.mask === "tree" ? true : false}
                  />
                  <label htmlFor="tree">Тританомалия</label>
                </span>
                <span className={styleModal.span}>
                  <input
                    onClick={deTree}
                    type="radio"
                    id="detree"
                    name="radio-group"
                    defaultChecked={state.mask === "detree" ? true : false}
                  />
                  <label htmlFor="detree">Дейтраномалия</label>
                </span>
              </div>
              <div className={styleModal.rangeBlock}>
                <p className={styleModal.rangeTitle}>Яркость</p>
                <div className={styleModal.rangeFlex}>
                  <input
                    ref={inputRef}
                    className={cn(styleModal.range, styleModal.rangeLight)}
                    min="0"
                    max="100"
                    step="1"
                    onChange={lightChange}
                    type="range"
                    defaultValue={state?.light}
                    style={{
                      background: `-webkit-linear-gradient(left,#fff 0%,#fff ${
                        window.localStorage.getItem("light")
                          ? window.localStorage.getItem("light")
                          : "50"
                      }%,#40494f ${
                        window.localStorage.getItem("light")
                          ? window.localStorage.getItem("light")
                          : "50"
                      }% ,#40494f`,
                    }}
                  />
                  <div className={styleModal.flexText}>
                    <p className={styleModal.text}>Меньше</p>
                    <p className={cn(styleModal.text, styleModal.textStrong)}>
                      По умолчанию
                    </p>
                    <p className={styleModal.text}>Больше</p>
                  </div>
                </div>
              </div>
              <div className={styleModal.rangeBlock}>
                <p className={styleModal.rangeTitle}>Контрастность</p>
                <div className={styleModal.rangeFlex}>
                  <input
                    ref={nasRef}
                    className={cn(styleModal.range, styleModal.rangeNas)}
                    onChange={nasChange}
                    min="0"
                    max="100"
                    step="1"
                    type="range"
                    style={{
                      background: `-webkit-linear-gradient(left,#fff 0%,#fff ${
                        window.localStorage.getItem("contrast")
                          ? window.localStorage.getItem("contrast")
                          : "50"
                      }%,#40494f ${
                        window.localStorage.getItem("contrast")
                          ? window.localStorage.getItem("contrast")
                          : "50"
                      }% ,#40494f`,
                    }}
                    defaultValue={state?.contrast}
                  />
                  <div className={styleModal.flexText}>
                    <p className={styleModal.text}>Меньше</p>
                    <p className={cn(styleModal.text, styleModal.textStrong)}>
                      По умолчанию
                    </p>
                    <p className={styleModal.text}>Больше</p>
                  </div>
                </div>
              </div>
              <div className={styleModal.rangeBlock}>
                <p className={styleModal.rangeTitle}>Оттенок</p>
                <div className={styleModal.rangeFlex}>
                  <input
                    ref={otRef}
                    className={cn(styleModal.range, styleModal.rangeOt)}
                    onChange={otChange}
                    min="0"
                    max="100"
                    step="1"
                    type="range"
                    style={{
                      background: `-webkit-linear-gradient(left,#fff 0%,#fff ${
                        window.localStorage.getItem("ottenok")
                          ? window.localStorage.getItem("ottenok")
                          : "50"
                      }%,#40494f ${
                        window.localStorage.getItem("ottenok")
                          ? window.localStorage.getItem("ottenok")
                          : "50"
                      }% ,#40494f`,
                    }}
                    defaultValue={state?.ottenok}
                  />
                  <div className={styleModal.flexText}>
                    <p className={styleModal.text}>Меньше</p>
                    <p className={cn(styleModal.text, styleModal.textStrong)}>
                      По умолчанию
                    </p>
                    <p className={styleModal.text}>Больше</p>
                  </div>
                </div>
              </div>
              <div className={styleModal.etc}>
                <p className={styleModal.etcP}>Дополнительно</p>
                <div className={styleModal.flexEtc}>
                  <Button onchange={saveSettings} text="Запомнить выбор" />
                  <div className={styleModal.checkbox}>
                    <input
                      id="not-scene"
                      className={styleModal.checkbox_custom}
                      name="not-scene"
                      type="checkbox"
                    />
                    <label
                      htmlFor="not-scene"
                      className={styleModal.checkbox_label}
                    >
                      Исключить непремлемые сцены
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button onClick={closeModal} className={styleModal.close}>
            &#10005;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
