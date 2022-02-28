const GET_MISSONS = 'bookStore/books/GET_MISSONS';

const initialState = [
  {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
];

export const setMissions = (payload) => ({
  type: GET_MISSONS,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
