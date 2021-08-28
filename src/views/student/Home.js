import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardExamToday } from "../../components/Card/CardExamToday";
import { CardResultExam } from "../../components/Card/CardResultExam";
import Auth from "../../config/Auth";
import { getAlreadyExam, getScheduleToday } from "../../redux";

export default function Home() {
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.schedule);
  const exam = useSelector((state) => state.exam);

  const loadScheduleToday = () => {
    dispatch(getScheduleToday());
  };

  useEffect(() => {
    dispatch(getAlreadyExam(Auth.getTokenAndUserId().userid));
  }, []);

  useEffect(() => {
    loadScheduleToday();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/4 flex flex-col md:flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-col sm:w-full md:w-full lg:w-1/2">
            {schedule.schedules.length > 0 ? (
              <CardExamToday data={schedule.schedules} already={exam.already} />
            ) : (
              <span className="text-2xl font-semibold mt-16 mb-16 justify-center item-center text-gray-700 text-center">
                <i className="fa fa-calendar-times"></i> There is no exam
                schedule today!
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col md:flex-col lg:flex-col sm:w-full md:w-full lg:w-full">
            {exam.scores.map((row) => (
              <CardResultExam result={row} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
