import { SET_EDIT_MODAL, SET_HIDE_MODAL, SET_MODAL_TITLE } from "./modalTypes";

export const setModalTitle = (title) => {
  return {
    type: SET_MODAL_TITLE,
    value: title,
  };
};

export const setHideModal = (status) => {
  return {
    type: SET_HIDE_MODAL,
    value: status,
  };
};

export const setEditModal = (status) => {
  return {
    type: SET_EDIT_MODAL,
    value: status,
  };
};
