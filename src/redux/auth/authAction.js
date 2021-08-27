import Auth from "../../config/Auth";
import { c_admin, c_student } from "../../config/code";
import { POST_DATA } from "../../services/post";
import {
  CLEAR_FORM_AUTH,
  FORM_USER,
  IS_SUCCESS_AUTH,
  MESSAGE_AUTH,
  MESSAGE_ERROR_AUTH,
} from "./authTypes";

export const changeFormUser = (event) => {
  return (dispatch) => {
    const { name, value } = event.target;
    dispatch(formUser(name, value));
  };
};

const formUser = (inputType, inputValue) => {
  return {
    type: FORM_USER,
    inputType: inputType,
    inputValue: inputValue,
  };
};

const setSuccessAuth = (value) => {
  return {
    type: IS_SUCCESS_AUTH,
    value: value,
  };
};

const setMessageAuth = (value) => {
  return {
    type: MESSAGE_AUTH,
    value: value,
  };
};

const clearFormAuth = () => {
  return {
    type: CLEAR_FORM_AUTH,
  };
};

const setMessageError = (value) => {
  return {
    type: MESSAGE_ERROR_AUTH,
    value: value,
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    POST_DATA("register", user)
      .then((res) => {
        if (res.code === 201) {
          dispatch(setMessageAuth(res.message));
          dispatch(setSuccessAuth(true));
          dispatch(clearFormAuth());
        }
        if (res.code === 400) {
          dispatch(setMessageError(res.message));
          dispatch(setSuccessAuth(false));
        }
      })
      .catch((err) => {
        dispatch(setMessageAuth(err));
        dispatch(setSuccessAuth(false));
      });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    POST_DATA("login", user)
      .then((res) => {
        dispatch(setSuccessAuth(true));
        dispatch(clearFormAuth());
        const now = new Date();
        let tipe = "";
        if (res.user.account_type === "admin") {
          tipe = c_admin;
        } else {
          tipe = c_student;
        }
        Auth.setToken(
          res.access_token,
          res.user.id,
          now.getDate() + 2,
          now.getMonth() + 1,
          tipe
        );
        window.location.reload();
      })
      .catch((err) => {
        dispatch(setMessageAuth(err));
        dispatch(setSuccessAuth(false));
      });
  };
};
