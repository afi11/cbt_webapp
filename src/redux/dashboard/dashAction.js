import { GET_COUNT_DATA, GET_SCORE_HIGH, GET_SCORE_LOW } from "./dashTypes";
import { GET_DATA } from "../../services/get";

const putCountData = (n_question, n_user, n_high, n_low) => {
  return {
    type: GET_COUNT_DATA,
    n_question: n_question,
    n_user: n_user,
    score_high: n_high,
    score_low: n_low,
  };
};

const putScoreHigh = (value) => {
  return {
    type: GET_SCORE_HIGH,
    value: value,
  };
};

const putScoreLow = (value) => {
  return {
    type: GET_SCORE_LOW,
    value: value,
  };
};

export const getDataDashboard = () => {
  return (dispatch) => {
    GET_DATA("dashboard").then((res) => {
      dispatch(
        putCountData(
          res.count.count_question,
          res.count.count_user,
          res.count.score_high,
          res.count.score_low
        )
      );
      dispatch(putScoreHigh(res.tophigh));
      dispatch(putScoreLow(res.toplow));
    });
  };
};
