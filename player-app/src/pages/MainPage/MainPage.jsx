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
          <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
          <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
          <ControlBar className={stylesMainPage.bar}>
            <button onClick={openModal} className={stylesMainPage.btn}></button>
          </ControlBar>
        </Player>
      </div>
    </div>
  );
};
