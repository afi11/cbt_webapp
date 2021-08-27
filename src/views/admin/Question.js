import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ModalQuestion from "../../components/Modal/ModalQuestion";
import TableQuestion from "../../components/Table/TableQuestion";
import {
  clearFormQuestion,
  deleteQuestion,
  getQuestionRow,
  postQuestion,
  setEditModal,
  setModalTitle,
  updateQuestion,
} from "../../redux";
import { GET_DATA } from "../../services/get";

export default function Question() {
  const modal = useSelector((state) => state.modal);
  const question = useSelector((state) => state.question);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const getQuestions = () => {
    GET_DATA("question").then((res) => {
      setData(res.data);
    });
  };

  const openModal = () => {
    dispatch(setModalTitle("Add Question"));
    dispatch(clearFormQuestion());
    if (document.querySelector(".modal-wrapper")) {
      document.querySelector(".modal-wrapper").classList.add("modal-is-open");
    }
  };

  const closeModal = () => {
    dispatch(clearFormQuestion());
    dispatch(setEditModal(false));
    dispatch(setModalTitle(""));
    if (document.querySelector(".modal-wrapper")) {
      document
        .querySelector(".modal-wrapper")
        .classList.remove("modal-is-open");
    }
  };

  const editModal = (row) => {
    dispatch(setModalTitle("Edit Schedule"));
    dispatch(setEditModal(true));
    dispatch(getQuestionRow(row));
    if (document.querySelector(".modal-wrapper")) {
      document.querySelector(".modal-wrapper").classList.add("modal-is-open");
    }
  };

  const postData = () => {
    if (modal.editModal) dispatch(updateQuestion(question.question));
    else dispatch(postQuestion(question.question));
    dispatch(setEditModal(false));
    setTimeout(() => {
      getQuestions();
    }, 3000);
  };

  const deleteData = (row) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-red-500 rounded text-white p-2 hover:bg-red-700 mr-2",
        cancelButton:
          "bg-blue-500 rounded text-white p-2 hover:bg-blue-700 mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Delete question with name ? " + row.question_name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete!",
        cancelButtonText: "No!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteQuestion(row.id));
          setTimeout(() => {
            getQuestions();
          }, 3000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-col mx-2">
        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
          <div className="px-6 py-2 border-b border-light-grey">
            <div className="flex flex-row justify-between">
              <div className="font-bold text-xl">Questions Data</div>
              <button
                onClick={openModal}
                className="bg-blue-500 rounded text-white p-2 hover:bg-blue-700"
              >
                <span className="fa fa-plus"></span> Add Data
              </button>
            </div>
          </div>
          <TableQuestion
            data={data}
            editModal={editModal}
            deleteData={deleteData}
          />
        </div>
      </div>

      <ModalQuestion
        postData={postData}
        closeModal={closeModal}
        title={modal.title}
        question={question.question}
      />
    </>
  );
}
