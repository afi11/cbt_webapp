import {
  CLEAR_FORM_AUTH,
  FORM_USER,
  GET_USER_DATA,
  IS_SUCCESS_AUTH,
  MESSAGE_AUTH,
  MESSAGE_ERROR_AUTH,
} from "./authTypes";

const initialState = {
  user: {},
  messageAuth: "",
  messageError: null,
  isSuccessAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER:
      return {
        ...state,
        user: {
          ...state.user,
          [action.inputType]: action.inputValue,
        },
      };
    case MESSAGE_AUTH:
      return {
        ...state,
        messageAuth: action.value,
      };
    case IS_SUCCESS_AUTH:
      return {
        ...state,
        isSuccessAuth: action.value,
      };
    case CLEAR_FORM_AUTH:
      return {
        ...state,
        user: {
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        },
      };
    case MESSAGE_ERROR_AUTH:
      return {
        ...state,
        messageError: action.value,
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: {
          name: action.value.name,
          photo: action.value.photo,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
