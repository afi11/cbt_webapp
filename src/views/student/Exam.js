import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { ModalConfirmation } from "../../components/Modal/ModalConfirmation";
import TimeLeft from "../../components/Timer/TimeLeft";
import Auth from "../../config/Auth";
import {
  answerExam,
  countQuestion,
  finishExam,
  loadAnswered,
  markAnswer,
  showNavQuestion,
  showQuestionExam,
} from "../../redux";
import { loadScheduleExam } from "../../redux/schedule/scheduleAction";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Exam() {
  const { id } = useParams();
  const query = useQuery();
  const no_question = query.get("no");
  const history = useHistory();
  const schedule = useSelector((state) => state.schedule);
  const question = useSelector((state) => state.question);
  const exam = useSelector((state) => state.exam);

  const dispatch = useDispatch();

  const getScheduleToday = () => {
    dispatch(loadScheduleExam(id));
  };

  const onChangeInput = (event) => {
    const { value } = event.target;
    const answer = {
      id: question.question.id,
      question_id: question.question.question_id,
      answered: value,
    };
    dispatch(answerExam(answer));
    dispatch(loadAnswered(question.question.id));
  };

  const addMark = (e) => {
    const { value } = e.target;
    const data = {
      id: question.question.id,
      is_doubht: value,
    };
    dispatch(markAnswer(data));
    dispatch(showQuestionExam(no_question, Auth.getTokenAndUserId().userid));
    dispatch(showNavQuestion(Auth.getTokenAndUserId().userid));
  };

  const gotoFinish = () => {
    if (document.querySelector(".modal-wrapper")) {
      document.querySelector(".modal-wrapper").classList.add("modal-is-open");
    }
  };

  const closeModal = () => {
    if (document.querySelector(".modal-wrapper")) {
      document
        .querySelector(".modal-wrapper")
        .classList.remove("modal-is-open");
    }
  };

  const finish = () => {
    dispatch(finishExam(Auth.getTokenAndUserId().userid));
  };

  useEffect(() => {
    dispatch(countQuestion(Auth.getTokenAndUserId().userid));
  }, []);

  useEffect(() => {
    dispatch(showNavQuestion(Auth.getTokenAndUserId().userid));
  }, []);

  useEffect(() => {
    dispatch(showQuestionExam(no_question, Auth.getTokenAndUserId().userid));
  }, []);

  useEffect(() => {
    getScheduleToday();
  }, []);

  const gotoNext = (no) => {
    history.push(`/student/exam/${id}?no=${no}`);
    dispatch(showQuestionExam(no, Auth.getTokenAndUserId().userid));
  };

  return (
    <>
      <div className="flex flex-1 flex-col sm:flex-col md:flex-col lg:flex-row justify-between">
        <div className="bg-white px-2 py-3 shadow w-full sm:w-full md:w-full lg:w-3/4 rounded">
          <div className="mb-3 flex flex-1 justify-between">
            <h5 className="text-gray-700 text-lg font-semibold">
              Question {no_question} / {exam.count_exam}
            </h5>
            <TimeLeft time={schedule.schedule.time_end} />
          </div>
          <div className="border-2 border-purple-300 rounded p-2">
            <h5 className="font-semibold">Question : </h5>
            <p className="text-gray-800">{question.question.question_name}</p>
          </div>
          <h5 className="text-gray-800 text-md font-semibold mt-3">Answer :</h5>
          {/* Option a */}
          <div className="shadow rounded bg-white p-2 mt-2">
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio1"
                type="radio"
                name="radio"
                className="hidden"
                value="a"
                checked={exam.answered == "a" ? true : false}
                onChange={(e) => onChangeInput(e)}
              />
              <label
                for="radio1"
                className="flex items-center cursor-pointer text-sm"
              >
                <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {question.question.option_1}
              </label>
            </div>
          </div>
          {/* Option b */}
          <div className="shadow rounded bg-white p-2 mt-2">
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio2"
                type="radio"
                name="radio"
                className="hidden"
                value="b"
                checked={exam.answered == "b" ? true : false}
                onChange={(e) => onChangeInput(e)}
              />
              <label
                for="radio2"
                className="flex items-center cursor-pointer text-sm"
              >
                <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {question.question.option_2}
              </label>
            </div>
          </div>
          {/* Option c */}
          <div className="shadow rounded bg-white p-2 mt-2">
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio3"
                type="radio"
                name="radio"
                className="hidden"
                value="c"
                checked={exam.answered == "c" ? true : false}
                onChange={(e) => onChangeInput(e)}
              />
              <label
                for="radio3"
                className="flex items-center cursor-pointer text-sm"
              >
                <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {question.question.option_3}
              </label>
            </div>
          </div>
          {/* Option d */}
          <div className="shadow rounded bg-white p-2 mt-2">
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio4"
                type="radio"
                name="radio"
                className="hidden"
                value="d"
                checked={exam.answered == "d" ? true : false}
                onChange={(e) => onChangeInput(e)}
              />
              <label
                for="radio4"
                className="flex items-center cursor-pointer text-sm"
              >
                <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {question.question.option_4}
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            {no_question == 1 ? (
              <span></span>
            ) : (
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white hover:text-white rounded px-3 py-1"
                onClick={() => gotoNext(parseInt(no_question) - 1)}
                type="button"
              >
                Previous
              </button>
            )}

            <div className="flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                id="A3-yes"
                name="A3-confirmation"
                checked={question.question.is_doubht == "1" ? true : false}
                value={question.question.is_doubht == "1" ? "0" : "1"}
                onChange={(e) => addMark(e)}
                className="opacity-0 absolute h-8 w-8"
              />
              <div className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                <svg
                  className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#ba34dc"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
              <label for="A3-yes" className="select-none">
                Mark
              </label>
            </div>

            {no_question < exam.count_exam ? (
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white hover:text-white rounded px-3 py-1"
                onClick={() => gotoNext(parseInt(no_question) + 1)}
                type="button"
              >
                Next
              </button>
            ) : (
              <button
                data-toggle="modal"
                id="btnFinish"
                onClick={() => gotoFinish()}
                className="bg-red-500 hover:bg-red-700 text-white hover:text-white rounded px-3 py-1"
                type="button"
              >
                Finish
              </button>
            )}
          </div>
        </div>

        <div className="bg-white  w-full sm:w-full md:w-full px-2 py-3 shadow lg:w-1/4 lg:ml-2 rounded">
          <h5 className="text-gray-700 text-lg font-semibold">
            Exam Navigation
          </h5>
          <div className="row ml-1 mr-1 mt-3">
            {question.question_nav.map((row) => (
              <button
                className={
                  row.no_question == no_question
                    ? "mt-2 bg-blue-500 rounded text-white rounded hover:bg-blue-700 px-4 py-2 mr-2"
                    : row.is_doubht == "1"
                    ? "mt-2 bg-orange-500 rounded text-white rounded hover:bg-orange-700 px-4 py-2 mr-2"
                    : row.answered == null
                    ? "mt-2 border-2 border-gray-700 rounded text-gray-700 hover:text-white rounded hover:bg-gray-700 px-4 py-2 mr-2"
                    : "mt-2 bg-green-500 rounded text-white rounded hover:bg-green-700 px-4 py-2 mr-2"
                }
                onClick={() => gotoNext(row.no_question)}
              >
                {row.no_question}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ModalConfirmation
        finishExam={finish}
        timeExam={schedule.schedule.time_end}
        closeModal={closeModal}
      />
    </>
  );
}
