import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "../../config/Auth";
import { POST_DATA } from "../../services/post";
import TimerCountDown from "../Timer/TimerCountDown";

const TableScheduleToday = (props) => {
  const gotoExam = (id) => {
    POST_DATA("history_exam", {
      user_id: Auth.getTokenAndUserId().userid,
    }).then(() => {
      props.history.push(`/student/exam/${id}?no=1`);
    });
  };

  return (
    <>
      {props.data.map((row, index) => (
        <div className="card shadow-sm mt-3">
          <div className="card-body">
            <div className="row mr-1 ml-1 justify-content-between">
              <h6>Waiting Time</h6>
              {props.already > 0 ? (
                <span>Finished</span>
              ) : (
                <TimerCountDown
                  timeStart={row.time_start}
                  gotoExam={() => gotoExam(row.id)}
                />
              )}
            </div>
            <h6 className="mb-2 mt-2 mr-1 ml-1">
              Started at {row.time_start} with duration in {row.duration}{" "}
              minutes.
            </h6>
            <h6 className="mb-0 mr-1 ml-1">Description :</h6>
            <p className="mr-1 ml-1">{row.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default withRouter(TableScheduleToday);
