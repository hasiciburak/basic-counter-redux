import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  countUp,
  countDown,
  resetToZero,
  toggleAlertBox,
} from "./redux/actions/counter-actions";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import waterAnimation from "./assets/animations/water-fill.json";
import AlertBox from "./components/AlertBox";
import { motion } from "framer-motion";
function App() {
  // REDUX REDUCER
  const value = useSelector((state) => state.counterReducer.value);
  const isOpened = useSelector((state) => state.counterReducer.isOpened);
  const lottieRef = useRef();
  const dispatch = useDispatch();

  console.log(value);

  // Button Variant for Framer Motion's Properties
  const buttonVariant = {
    pressed: {
      scale: 0.9,
      transition: {
        duration: 0.15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <>
      <AlertBox />
      <div className="App">
        <header className="App-header">
          <h1>Water Tracker</h1>
          <Player
            autoplay
            ref={lottieRef}
            src={waterAnimation}
            style={{ width: "20vw", maxWidth: "100%" }}
          ></Player>
          <h3>Amount {value}</h3>
          <div className="button-row">
            <motion.button
              variants={buttonVariant}
              whileTap="pressed"
              className="plus-btn"
              whileHover="hover"
              onClick={() => {
                dispatch(countUp());
                lottieRef.current.play();
              }}
            >
              +
            </motion.button>
            <motion.button
              className="reset-btn"
              onClick={() => {
                dispatch(resetToZero());
              }}
              variants={buttonVariant}
              whileTap="pressed"
              whileHover="hover"
            >
              Reset to Zero
            </motion.button>
            <motion.button
              className="minus-btn"
              onClick={() => {
                if (value <= 0) {
                  dispatch(toggleAlertBox(true));
                } else {
                  dispatch(countDown());
                  lottieRef.current.play();
                }
              }}
              variants={buttonVariant}
              whileTap="pressed"
              whileHover="hover"
            >
              -
            </motion.button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
