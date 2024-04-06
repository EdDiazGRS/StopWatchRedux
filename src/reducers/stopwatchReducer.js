

import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from './actions/stopwatchActions';

// Initial state for the stopwatch
const initialState = {
  time: 0,
  isRunning: false,
};

// Reducer function to handle stopwatch actions
const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        time: 0,
        isRunning: false,
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
