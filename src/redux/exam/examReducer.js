import {
  GET_ANSWERED,
  COUNT_QUESTION,
  CHECK_EXAM_FINISH,
  SCORES_EXAM,
} from "./examTypes";

const initialState = {
  count_exam: 0,
  answered: "",
  already: 0,
  scores: [],
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_QUESTION:
      return {
        ...state,
        count_exam: action.value,
      };
    case GET_ANSWERED:
      return {
        ...state,
        answered: action.value,
      };
    case CHECK_EXAM_FINISH:
      return {
        ...state,
        already: action.value,
      };
    case SCORES_EXAM:
      return {
        ...state,
        scores: action.scores,
      };
    default:
      return state;
  }
};

export default examReducer;
