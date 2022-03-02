import fetchMissionsApi from '../../api/missionsAPI';

const GET_MISSONS = 'bookStore/books/GET_MISSONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

const initialState = [];

export const setMissions = (payload) => ({
  type: GET_MISSONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  id: payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  id: payload,
});

export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissionsApi();
  dispatch(setMissions(missions));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSONS:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }

        return { ...mission, reserved: true };
      });

      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }

        return { ...mission, reserved: false };
      });

      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
