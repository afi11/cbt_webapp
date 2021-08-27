import React from "react";
import { useDispatch } from "react-redux";
import { changeFormQuestion } from "../../redux";

export default function ModalQuestion(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div id="centeredModal" className="modal-wrapper">
        <div className="overlay close-modal"></div>
        <div className="modal modal-centered">
          <div className="modal-content shadow-lg p-5">
            <div className="border-b p-2 pb-3 pt-0 mb-4">
              <div className="flex justify-between items-center">
                {props.title}
                <span
                  onClick={props.closeModal}
                  id="closeModal"
                  className="close-modal cursor-pointer px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <i className="fas fa-times text-gray-700"></i>
                </span>
              </div>
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Question</label>
              <textarea
                name="question_name"
                value={props.question.question_name}
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              ></textarea>
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Option A</label>
              <input
                type="text"
                name="option_1"
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.question.option_1}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Option B</label>
              <input
                type="text"
                name="option_2"
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.question.option_2}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Option C</label>
              <input
                type="text"
                name="option_3"
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.question.option_3}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Option D</label>
              <input
                type="text"
                name="option_4"
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.question.option_4}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Select Answer Key</label>
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="answer_key"
                onChange={(e) => dispatch(changeFormQuestion(e))}
              >
                <option value="">Choose one of answers</option>
                <option
                  value="a"
                  selected={props.question.answer_key === "a" ? true : false}
                >
                  Option A
                </option>
                <option
                  value="b"
                  selected={props.question.answer_key === "b" ? true : false}
                >
                  Option B
                </option>
                <option
                  value="c"
                  selected={props.question.answer_key === "c" ? true : false}
                >
                  Option C
                </option>
                <option
                  value="d"
                  selected={props.question.answer_key === "d" ? true : false}
                >
                  Option D
                </option>
              </select>
            </div>
            <div className="flex flex-col mb-3">
              <label className="font-semibold">Score</label>
              <input
                type="number"
                name="skor"
                onChange={(e) => dispatch(changeFormQuestion(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.question.skor}
              />
            </div>
            <div className="flex flex-row mt-3">
              <button
                type="button"
                onClick={() => props.postData()}
                className="bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white rounded"
              >
                Save Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
