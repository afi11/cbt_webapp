import { GET_COUNT_DATA, GET_SCORE_HIGH, GET_SCORE_LOW } from "./dashTypes";

const initialState = {
  n_question: 0,
  score_high: 0,
  score_low: 0,
  n_user: 0,
  list_score_high: [],
  list_score_low: [],
};

const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNT_DATA:
      return {
        ...state,
        n_question: action.n_question,
        score_high: action.score_high,
        score_low: action.score_low,
        n_user: action.n_user,
      };
    case GET_SCORE_HIGH:
      return {
        ...state,
        list_score_high: action.value,
      };
    case GET_SCORE_LOW:
      return {
        ...state,
        list_score_low: action.value,
      };
    default:
      return state;
  }
};

export default dashReducer;
