const GET_ROCKETS = 'rocketStore/rockets/GET_ROCKETS';

const initialState = [];

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducerRockets;
