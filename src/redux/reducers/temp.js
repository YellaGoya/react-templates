import { INIT, REMOVE, UPDATE } from 'redux/actions/temp';

const initialState = {
  type: '',
  value: '',
};

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        type: action.payload.type,
        value: action.payload.value,
      };

    case UPDATE:
      return {
        ...state,
        type: action.payload.type || state.type,
        value: action.payload.value || state.value,
      };

    case REMOVE:
      return initialState;

    default:
      return state;
  }
};

export default tempReducer;
