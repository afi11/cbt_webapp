import React from "react";
import { formatDateHuman } from "../../helpers/Time";
import ProgressBarScore from "../ProgressBar/ProgressBarScore";

export function CardResultExam(props) {
  const { max_score, score } = props.result;

  const percent = Math.round((parseInt(score) / parseInt(max_score)) * 100);

  return (
    <>
      <div className="bg-white rounded shadow-lg mx-2 px-3 py-4">
        <div className="flex flex-1 flex-row justify-between">
          <div className="flex flex-col">
            <h6 className="font-semibold text-lg text-gray-700">
              Exam on {formatDateHuman(props.result.exam_date)}
            </h6>
            <button className="bg-blue-500 hover:bg-blue-700 rounded-full text-white shadow px-4 py-2 mt-1">
              Get Certificate
            </button>
          </div>
          <div className="circle_container ml-auto">
            <span>{props.result.score}</span>
          </div>
        </div>

        <ProgressBarScore completed={percent} max={max_score} score={score} />
      </div>
    </>
  );
}
