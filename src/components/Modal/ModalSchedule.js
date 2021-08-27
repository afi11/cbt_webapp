import React from "react";
import { useDispatch } from "react-redux";
import { inputChange } from "../../redux";

export function ModalSchedule(props) {
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
            <div className="flex flex-col">
              <label className="font-semibold">Day</label>
              <input
                type="date"
                name="day"
                onChange={(e) => dispatch(inputChange(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.schedule.day}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold">Time Start</label>
              <input
                type="time"
                name="time_start"
                onChange={(e) => dispatch(inputChange(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.schedule.time_start}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold">Duration in minute</label>
              <input
                type="number"
                name="duration"
                onChange={(e) => dispatch(inputChange(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.schedule.duration}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-semibold">Desc</label>
              <textarea
                name="desc"
                onChange={(e) => dispatch(inputChange(e))}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={props.schedule.desc}
              ></textarea>
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
