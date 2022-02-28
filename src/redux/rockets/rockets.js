const GET_ROCKETS = 'rocketStore/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'rocketStore/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'rocketStore/rockets/CANCEL_RESERVATION';

const initialState = [];

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const bookingRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }

        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }
    default:
      return state;
  }
};

export default reducerRockets;
