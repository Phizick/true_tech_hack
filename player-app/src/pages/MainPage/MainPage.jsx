import { useDispatch } from "react-redux";
import stylesMainPage from "./MainPage.module.css";
import { testAction } from "../../service/slices/test";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
export const MainPage = () => {
  const dispatch = useDispatch();
  const testRedux = () => {
    dispatch(testAction());
  };
  return (
    <div>
      <h1>MainPage</h1>
      <button onClick={testRedux}>test Redux</button>
      <Player poster="/assets/poster.png">
        <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
        <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton disabled />
        </ControlBar>
      </Player>
    </div>
  );
};
