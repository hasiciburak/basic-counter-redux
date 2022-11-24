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
import { motion, useAnimation } from "framer-motion";
function App() {
  // REDUX REDUCER
  const value = useSelector((state) => state.counterReducer.value);
  const isOpened = useSelector((state) => state.counterReducer.isOpened);
  const lottieRef = useRef();
  const dispatch = useDispatch();
  const animate = useAnimation();
  const shakeArray = [
    0, 30, 0, -30, 0, 30, 0, -30, 0, 0, 30, 0, -30, 0, 30, 0, -30, 0,
  ];
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
      <AlertBox buttonVariant={buttonVariant} />
      <div className="App">
        <header className="App-header">
          <h1>Water Tracker</h1>
          <motion.div animate={animate}>
            <Player
              autoplay
              ref={lottieRef}
              src={waterAnimation}
              style={{ width: "300px", maxWidth: "100%" }}
            ></Player>
          </motion.div>

          <h3>Amount {value}</h3>
          <div className="button-row">
            <motion.button
              variants={buttonVariant}
              className="plus-btn"
              whileTap="pressed"
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
                  // Shake Animation for the bottle
                  animate.start({
                    rotate: shakeArray,
                    transition: {
                      duration: 0.5,
                    },
                  });
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
