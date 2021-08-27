import React from "react";
import { useHistory } from "react-router-dom";
import Auth from "../../config/Auth";
import { POST_DATA } from "../../services/post";
import TimerCountDown from "../Timer/TimerCountDown";

export function CardExamToday(props) {
  const history = useHistory();

  const gotoExam = (id) => {
    POST_DATA("history_exam", {
      user_id: Auth.getTokenAndUserId().userid,
    }).then(() => {
      history.push(`/student/exam/${id}?no=1`);
    });
  };

  return (
    <>
      {props.data.map((row, index) => (
        <div className="bg-white rounded w-full shadow-lg px-3 py-4">
          <div className="flex flex-1 flex-row justify-between">
            <h6 className="font-semibold text-xl">Your Exam Schedule Today</h6>
            {props.already > 0 ? (
              <span className="text-lg text-green-600 font-semibold">
                {" "}
                <i className="fa fa-check-circle"></i> Finished
              </span>
            ) : (
              <TimerCountDown
                timeStart={row.time_start}
                gotoExam={() => gotoExam(row.id)}
              />
            )}
          </div>
          <h6 className="font-semibold text-gray-700 text-md mt-3">
            <span className="fa fa-rocket"></span> Started at {row.time_start}{" "}
            with duration in {row.duration} minutes.
          </h6>
          <h6 className="font-semibold text-gray-700 text-md mt-3">
            Description :
          </h6>
          <p className="text-gray-700 text-md">{row.desc}</p>
        </div>
      ))}
    </>
  );
}

export default CardExamToday;
