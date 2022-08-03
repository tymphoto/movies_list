import { START, STOP } from '../constants/constants';

const LoadingReducer = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case START:
      return true;
    case STOP:
      return false;

    default:
      return state;
  }
};

export default LoadingReducer;
