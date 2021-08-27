import Swal from "sweetalert2";
import { DELETE_DATA } from "../../services/delete";
import { GET_DATA, GET_DET_DATA } from "../../services/get";
import { POST_DATA } from "../../services/post";
import { UPDATE_DATA } from "../../services/update";
import {
  CHANGE_FORM_SCHEDULE,
  CLEAR_FORM_SCHEDULE,
  SCHEDULE_EDIT,
  SCHEDULE_EXAM,
  SCHEDULE_TODAY,
} from "./scheduleTypes";

export const inputChange = (event) => {
  return (dispatch) => {
    const { name, value } = event.target;
    dispatch(changeForm(name, value));
  };
};

export const changeForm = (inputType, inputValue) => {
  return {
    type: CHANGE_FORM_SCHEDULE,
    inputType: inputType,
    inputValue: inputValue,
  };
};

export const scheduleToday = (value) => {
  return {
    type: SCHEDULE_TODAY,
    value: value,
  };
};

export const scheduleExam = (value) => {
  return {
    type: SCHEDULE_EXAM,
    value: value,
  };
};

export const editSchedule = (row) => {
  return {
    type: SCHEDULE_EDIT,
    row: row,
  };
};

export const loadScheduleExam = (id) => {
  return (dispatch) => {
    GET_DET_DATA("schedule", id).then((res) => {
      dispatch(scheduleExam(res.data));
    });
  };
};

export const postSchedule = (schedule) => {
  return () => {
    POST_DATA("schedule", schedule)
      .then((res) => {
        if (res.status) Swal.fire("Successfull", res.message, "success");
        else Swal.fire("Failed", res.message, "error");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed!", err.message, "error");
      });
  };
};

export const updateSchedule = (schedule) => {
  return () => {
    UPDATE_DATA("schedule", schedule)
      .then((res) => {
        Swal.fire("Successfull", res.message, "success");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed!", err.message, "error");
      });
  };
};

export const deleteSchedule = (id) => {
  return () => {
    DELETE_DATA("schedule", id)
      .then((res) => {
        Swal.fire("Successfull", res.message, "success");
        const closeModal = document.getElementById("closeModal");
        closeModal.click();
      })
      .catch((err) => {
        Swal.fire("Failed!", err.message, "error");
      });
  };
};

export const getScheduleToday = () => {
  return (dispatch) => {
    GET_DATA("student").then((res) => {
      console.log(res.data);
      dispatch(scheduleToday(res.data));
    });
  };
};

export const clearFormSchedule = () => {
  return {
    type: CLEAR_FORM_SCHEDULE,
  };
};
