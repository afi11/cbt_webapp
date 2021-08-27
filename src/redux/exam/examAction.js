import { GET_DATA, GET_DET_DATA } from "../../services/get";
import { POST_DATA } from "../../services/post";
import { QUESTION_TO_STUDENT } from "../question/questionTypes";
import {
  GET_ANSWERED,
  COUNT_QUESTION,
  SCORES_EXAM,
  CHECK_EXAM_FINISH,
} from "./examTypes";

const putCountQuestion = (value) => {
  return {
    type: COUNT_QUESTION,
    value: value,
  };
};

export const countQuestion = (userid) => {
  return (dispatch) => {
    GET_DATA(`count_question?userid=${userid}`).then((res) => {
      dispatch(putCountQuestion(res.data));
    });
  };
};

const putAnswered = (value) => {
  return {
    type: GET_ANSWERED,
    value: value,
  };
};

const showQuestion = (row) => {
  return {
    type: QUESTION_TO_STUDENT,
    row: row,
  };
};

export const showQuestionExam = (page, userid) => {
  return (dispatch) => {
    GET_DATA(`history_exam?page=${page}&userid=${userid}`).then((res) => {
      dispatch(showQuestion(res.data));
      dispatch(loadAnswered(res.data.id_history));
    });
  };
};

export const loadAnswered = (idhistory) => {
  return (dispatch) => {
    dispatch(putAnswered(""));
    GET_DATA(`get_answer?idhistory=${idhistory}`).then((res) => {
      dispatch(putAnswered(res.data));
    });
  };
};

export const answerExam = (value) => {
  return () => {
    POST_DATA("answer", value).then(() => {});
  };
};

export const markAnswer = (data) => {
  return () => {
    POST_DATA("doubht_answer", data).then(() => {});
  };
};

export const finishExam = (user_id) => {
  return () => {
    const finish = {
      user_id: user_id,
    };
    POST_DATA("finish_exam", finish).then((res) => {
      if (res.code == 200) {
        window.location.href = "/student";
      }
    });
  };
};

const alreadyExam = (status) => {
  return {
    type: CHECK_EXAM_FINISH,
    value: status,
  };
};

const putScore = (scores) => {
  return {
    type: SCORES_EXAM,
    scores: scores,
  };
};

export const getAlreadyExam = (userid) => {
  return (dispatch) => {
    GET_DET_DATA("check_exam", userid).then((res) => {
      dispatch(putScore(res.data));
      dispatch(alreadyExam(res.already));
    });
  };
};
