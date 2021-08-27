import {
  QUESTION_CLEAR_FORM,
  QUESTION_FORM,
  QUESTION_GET_ROW,
  QUESTION_NAV,
  QUESTION_TO_STUDENT,
  QUSTION_LIST,
} from "./questionTypes";

const initialState = {
  question: {},
  questions: [],
  question_nav: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FORM:
      return {
        ...state,
        question: {
          ...state.question,
          [action.inputType]: action.inputValue,
        },
      };
    case QUESTION_GET_ROW:
      return {
        ...state,
        question: {
          id: action.row.id,
          question_name: action.row.question_name,
          option_1: action.row.option_1,
          option_2: action.row.option_2,
          option_3: action.row.option_3,
          option_4: action.row.option_4,
          answer_key: action.row.answer_key,
          skor: action.row.skor,
        },
      };
    case QUESTION_CLEAR_FORM:
      return {
        ...state,
        question: {
          id: "",
          question_name: "",
          option_1: "",
          option_2: "",
          option_3: "",
          option_4: "",
          answer_key: "",
          skor: "",
        },
      };
    case QUESTION_TO_STUDENT:
      return {
        ...state,
        question: {
          id: action.row.id_history,
          question_id: action.row.question_id,
          question_name: action.row.question_name,
          option_1: action.row.option_1,
          option_2: action.row.option_2,
          option_3: action.row.option_3,
          option_4: action.row.option_4,
          answer_key: action.row.answer_key,
          is_doubht: action.row.is_doubht,
        },
      };
    case QUSTION_LIST:
      return {
        ...state,
        questions: action.row,
      };
    case QUESTION_NAV:
      return {
        ...state,
        question_nav: action.row,
      };
    default:
      return state;
  }
};

export default questionReducer;
