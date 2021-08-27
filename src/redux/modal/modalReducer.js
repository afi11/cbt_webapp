import { SET_EDIT_MODAL, SET_HIDE_MODAL, SET_MODAL_TITLE } from "./modalTypes";

const initialState = {
  title: "",
  stateModal: true,
  editModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_TITLE:
      return {
        ...state,
        title: action.value,
      };
    case SET_HIDE_MODAL:
      return {
        ...state,
        stateModal: action.value,
      };
    case SET_EDIT_MODAL:
      return {
        ...state,
        editModal: action.value,
      };
    default:
      return state;
  }
};

export default modalReducer;
