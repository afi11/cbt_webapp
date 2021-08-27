import React, { useEffect, useState } from "react";
import { getTimeByClock, getTimeNow } from "../../helpers/Time";

export default function TimerCountDown({ timeStart, gotoExam }) {
  var [hrs, setHrs] = useState(0);
  var [min, setMin] = useState(0);
  var [sec, setSec] = useState(60);

  const countDown = () => {
    if (hrs === 0 && min === 0 && sec === 0) {
      document.querySelector(".timer").classList.add("hide");
      document.querySelector(".btn-mulai").classList.remove("hide");
    } else if (min === 0 && sec === 0) {
      setHrs(hrs - 1);
      setMin(59);
      setSec(59);
    } else if (sec === 0) {
      setHrs(hrs);
      setMin(min - 1);
      setSec(59);
    } else {
      setHrs(hrs);
      setMin(min);
      setSec(sec - 1);
    }
  };

  useEffect(() => {
    setHrs(getTimeByClock(timeStart).getHours() - getTimeNow().getHours());
    var min2 =
      getTimeByClock(timeStart).getMinutes() - getTimeNow().getMinutes();
    if (min2 < 0) {
      min2 = 60 - getTimeNow().getMinutes();
    }
    setMin(min2);
    setMin(getTimeByClock(timeStart).getMinutes() - getTimeNow().getMinutes());
    if (hrs < 0 || min < 0) {
      document.querySelector(".timer").classList.add("hide");
      document.querySelector(".btn-mulai").classList.remove("hide");
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="flex flex-row">
        <span className="timer">
          <span className="flex bg-purple-700 item-center p-2 text-white font-semibold rounded-tl rounded-bl shadow">
            Waiting Time
          </span>
          <span className="flex item-center bg-purple-500 p-2 text-white font-semibold rounded-tr rounded-br shadow">{`${hrs
            .toString()
            .padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")}`}</span>
        </span>
      </div>
      <button
        className="btn-mulai hide bg-blue-500 px-3 py-2 hover:bg-blue-700 text-white rounded-full"
        onClick={gotoExam}
      >
        Start
      </button>
    </>
  );
}
