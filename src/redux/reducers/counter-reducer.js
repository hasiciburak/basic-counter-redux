import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_TO_ZERO,
  TOGGLE_ALERT_BOX,
} from "../actionTypes/action-types";

const initState = {
  value: 0,
  isOpened: false,
};

export const counterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COUNT_UP:
      return { ...state, value: state.value + 1 };
    case COUNT_DOWN:
      return { ...state, value: state.value - 1 };
    case RESET_TO_ZERO:
      return { ...state, value: 0 };
    case TOGGLE_ALERT_BOX:
      return { ...state, isOpened: payload };
    default:
      return state;
  }
};
