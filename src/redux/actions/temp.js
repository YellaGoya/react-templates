export const INIT = 'INIT';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export const init = ({ type, value }) => {
  return {
    type: INIT,
    payload: {
      type,
      value,
    },
  };
};

export const update = ({ type, value }) => {
  return {
    type: UPDATE,
    payload: {
      type,
      value,
    },
  };
};

export const remove = () => {
  return {
    type: REMOVE,
  };
};
