import Lottie from "lottie-react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  countUp,
  countDown,
  resetToZero,
} from "./redux/actions/counter-actions";
import { useRef } from "react";
import waterAnimation from "./assets/animations/water-fill.json";
function App() {
  const value = useSelector((state) => state.counterReducer.value);
  const lottieRef = useRef();
  const playFrames = {
    segments: [
      [0, 23],
      [24, 95],
    ],
    forceFlag: false,
  };
  const dispatch = useDispatch();

  console.log(value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Water Tracker</h1>
        <Lottie
          lottieRef={lottieRef}
          animationData={waterAnimation}
          loop={false}
          autoplay={false}
          playSegments={playFrames}
        />
        <h3>Amount {value}</h3>
        <div className="button-row">
          <button
            onClick={() => {
              dispatch(countUp());
              lottieRef.current.play();
            }}
          >
            +
          </button>
          <button onClick={() => dispatch(countDown())}>-</button>
          <button onClick={() => dispatch(resetToZero())}>Reset to Zero</button>
        </div>
      </header>
    </div>
  );
}

export default App;
