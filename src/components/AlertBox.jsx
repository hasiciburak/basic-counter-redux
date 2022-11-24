import React, { useState } from "react";
import "./AlertBox.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleAlertBox } from "../redux/actions/counter-actions";
import { motion } from "framer-motion";
const AlertBox = () => {
  let [isOpen, setIsOpen] = useState(false);
  const value = useSelector((state) => state.counterReducer.isOpened);
  const dispatch = useDispatch();
  const buttonVariant = {
    pressed: {
      scale: 0.98,
      transition: {
        duration: 0.15,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div className="alertbox-wrapper" style={{ display: !value && "none" }}>
      <div className="alertbox-container">
        <motion.button
          className="close-btn"
          onClick={() => dispatch(toggleAlertBox(false))}
          variants={buttonVariant}
          whileTap="pressed"
          whileHover="hover"
        >
          x
        </motion.button>
        <div className="header-area">
          <h1>Attention</h1>
        </div>
        <p>You cannot drink less than 0 glass!</p>
        <motion.button
          variants={buttonVariant}
          whileTap="pressed"
          whileHover="hover"
          className="accept-button"
          onClick={() => dispatch(toggleAlertBox(false))}
        >
          OKAY
        </motion.button>
      </div>
    </div>
  );
};

export default AlertBox;
