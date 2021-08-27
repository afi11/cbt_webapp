import React from "react";
import { TimeLeftConfirmation } from "../Timer/TimeLeftConfirmation";

export function ModalConfirmation({ finishExam, timeExam, closeModal }) {
  return (
    <>
      <div id="centeredModal" className="modal-wrapper">
        <div className="overlay close-modal"></div>
        <div className="modal modal-centered">
          <div className="modal-content shadow-lg p-5">
            <div className="border-b p-2 pb-3 pt-0 mb-4">
              <div className="flex justify-between items-center">
                Confirmation
                <span
                  onClick={closeModal}
                  id="closeModal"
                  className="close-modal cursor-pointer px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <i className="fas fa-times text-gray-700"></i>
                </span>
              </div>
            </div>
            <div className="flex flex-row">
               <span className="text-gray-700 text-md">Please check your answer, because you still have.</span>
              <TimeLeftConfirmation time={timeExam} />
            </div>
            <div className="flex flex-row mt-3">
              <button
                type="button"
                onClick={() => finishExam()}
                className="bg-red-500 hover:bg-red-700 px-2 py-2 text-white rounded"
              >
                Finish Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
