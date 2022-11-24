import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_TO_ZERO,
  TOGGLE_ALERT_BOX,
} from "../actionTypes/action-types";

const countUp = () => {
  return { type: COUNT_UP };
};

const countDown = () => {
  return { type: COUNT_DOWN };
};

const resetToZero = () => {
  return { type: RESET_TO_ZERO };
};

const toggleAlertBox = (payload) => {
  return { type: TOGGLE_ALERT_BOX, payload: payload };
};
export { countUp, countDown, resetToZero, toggleAlertBox };
