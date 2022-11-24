import React, { useState } from "react";
import "./AlertBox.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleAlertBox } from "../redux/actions/counter-actions";

const AlertBox = () => {
  let [isOpen, setIsOpen] = useState(false);
  const value = useSelector((state) => state.counterReducer.isOpened);
  const dispatch = useDispatch();

  return (
    <div className="alertbox-wrapper" style={{ display: !value && "none" }}>
      <div className="alertbox-container">
        <div className="header-area">
          <h1>Attention</h1>
          <button onClick={() => dispatch(toggleAlertBox(false))}>Close</button>
        </div>
        <p>You cannot drink less than 0 glass!</p>
        <button
          className="accept-button"
          onClick={() => dispatch(toggleAlertBox(false))}
        >
          OKAY
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
