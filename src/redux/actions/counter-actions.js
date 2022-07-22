import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_TO_ZERO,
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

export { countUp, countDown, resetToZero };
