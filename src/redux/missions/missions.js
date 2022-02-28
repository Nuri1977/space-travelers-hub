import fetchMissionsApi from '../../api/missionsAPI';

const GET_MISSONS = 'bookStore/books/GET_MISSONS';

const initialState = [];

export const setMissions = (payload) => ({
  type: GET_MISSONS,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissionsApi();
  if (missions.name === 'Error') {
    alert(missions.name);
  } else {
    dispatch(setMissions(missions));
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
