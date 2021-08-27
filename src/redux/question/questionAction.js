import Swal from "sweetalert2";
import { DELETE_DATA } from "../../services/delete";
import { GET_DATA } from "../../services/get";
import { POST_DATA } from "../../services/post";
import { UPDATE_DATA } from "../../services/update";
import {
  QUESTION_CLEAR_FORM,
  QUESTION_FORM,
  QUESTION_GET_ROW,
  QUESTION_NAV,
} from "./questionTypes";

export const changeFormQuestion = (event) => {
  return (dispatch) => {
    const { name, value } = event.target;
    dispatch(questionForm(name, value));
  };
};

const questionForm = (inputType, inputValue) => {
  return {
    type: QUESTION_FORM,
    inputType: inputType,
    inputValue: inputValue,
  };
};

export const clearFormQuestion = () => {
  return {
    type: QUESTION_CLEAR_FORM,
  };
};

export const getQuestionRow = (row) => {
  return {
    type: QUESTION_GET_ROW,
    row: row,
  };
};

const showNav = (row) => {
  return {
    type: QUESTION_NAV,
    row: row,
  };
};

export const showNavQuestion = (userid) => {
  return (dispatch) => {
    GET_DATA(`nav_exam?userid=${userid}`).then((res) => {
      dispatch(showNav(res.data));
    });
  };
};

export const postQuestion = (question) => {
  return () => {
    POST_DATA("question", question)
      .then((res) => {
        Swal.fire("Successfull", res.message, "success");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed", err, "error");
      });
  };
};

export const updateQuestion = (question) => {
  return () => {
    UPDATE_DATA("question", question)
      .then((res) => {
        Swal.fire("Successfull", res.message, "success");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed", err, "error");
      });
  };
};

export const deleteQuestion = (id) => {
  return () => {
    DELETE_DATA("question", id)
      .then((res) => {
        Swal.fire("Successfull", res.message, "success");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed", err, "error");
      });
  };
};
