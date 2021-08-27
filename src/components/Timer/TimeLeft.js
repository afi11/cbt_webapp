import React, { useEffect, useState } from "react";
import { getTimeByClock, getTimeNow } from "../../helpers/Time";

export default function TimeLeft({ time }) {
  var [hrs, setHrs] = useState(0);
  var [min, setMin] = useState(0);
  var [sec, setSec] = useState(60);

  const countDown = () => {
    if (hrs === 0 && min === 0 && sec === 0) {
      document.querySelector(".timer").classList.add("hide");
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
    const interval = setInterval(() => countDown(), 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    var hrs2 = getTimeByClock(time).getHours() - getTimeNow().getHours();
    var min2 = getTimeByClock(time).getMinutes() - getTimeNow().getMinutes();
    if (min2 < 0) {
      setHrs(hrs2 - 1);
      min2 = 60 - getTimeNow().getMinutes();
    }
    setMin(min2);
  });
  return (
    <>
      <div className="flex flex-row">
        <span className="shadow rounded-tl rounded-bl text-white px-2 py-1 bg-purple-700">Time Left</span>
        <span className="shadow rounded-tr rounded-br text-white px-2 py-1 bg-purple-500 timer">{`${hrs
          .toString()
          .padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec
          .toString()
          .padStart(2, "0")}`}</span>
      </div>
    </>
  );
}
