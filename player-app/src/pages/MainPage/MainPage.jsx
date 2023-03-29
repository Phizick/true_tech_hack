/**
 * @component
 * Главная страница приложения
 * @returns
 * возвращает разметку страницы, конкретно Кастомный плеер с модальным окном
 */

import stylesMainPage from "./MainPage.module.css";
import { Player, ControlBar,BigPlayButton } from "video-react";
import { Modal } from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
export const MainPage = () => {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => {
    setActiveModal(true);
  };
  const closeModal = () => {
    setActiveModal(false);
  };

  useEffect(() => {});

  return (
    <div>
      <div className={stylesMainPage.video}>
        <Player poster="/assets/poster.png">
          <BigPlayButton position="center" />
          <Modal closeModal={closeModal} active={activeModal} />
          <source src="http://91.185.84.78:8080/video" />
          <source src="http://91.185.84.78:8080/video" />
          <ControlBar className={stylesMainPage.bar}>
            <button onClick={openModal} className={stylesMainPage.btn}></button>
          </ControlBar>
        </Player>
      </div>
    </div>
  );
};
