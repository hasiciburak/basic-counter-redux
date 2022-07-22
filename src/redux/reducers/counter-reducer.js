import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_TO_ZERO,
} from "../actionTypes/action-types";

const initState = {
  value: 0,
};

export const counterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COUNT_UP:
      return { ...state, value: state.value + 1 };
    case COUNT_DOWN:
      return { ...state, value: state.value - 1 };
    case RESET_TO_ZERO:
      return { ...state, value: 0 };
    default:
      return state;
  }
};
