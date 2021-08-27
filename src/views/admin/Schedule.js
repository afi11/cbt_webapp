import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import TableSchedule from "../../components/Table/TableSchedule";
import { ModalSchedule } from "../../components/Modal/ModalSchedule";
import {
  clearFormSchedule,
  deleteSchedule,
  editSchedule,
  postSchedule,
  setEditModal,
  setModalTitle,
  updateSchedule,
} from "../../redux";
import Swal from "sweetalert2";

export default function Schedule() {
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.schedule);
  const modal = useSelector((state) => state.modal);

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://127.0.0.1:8000/api/schedule").then((res) => {
      setData(res.data.data);
    });
  };

  const editModal = (row) => {
    dispatch(setModalTitle("Edit Schedule"));
    dispatch(setEditModal(true));
    dispatch(editSchedule(row));
    if (document.querySelector(".modal-wrapper")) {
      document.querySelector(".modal-wrapper").classList.add("modal-is-open");
    }
  };

  const deleteData = (row) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-red-500 rounded text-white p-2 hover:bg-red-700 mr-2",
        cancelButton: "bg-blue-500 rounded text-white p-2 hover:bg-blue-700 mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Delete schedule at ? " + row.day,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete!",
        cancelButtonText: "No!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteSchedule(row.id));
          setTimeout(() => {
            getData();
          }, 3000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
  };

  const openModal = () => {
    dispatch(setModalTitle("Add Schedule"));
    dispatch(clearFormSchedule());
    if (document.querySelector(".modal-wrapper")) {
      document.querySelector(".modal-wrapper").classList.add("modal-is-open");
    }
  };

  const submitData = () => {
    if (modal.editModal) dispatch(updateSchedule(schedule.schedule));
    else dispatch(postSchedule(schedule.schedule));
    dispatch(setEditModal(false));
    setTimeout(() => {
      getData();
    }, 3000);
  };

  const closeModal = () => {
    dispatch(clearFormSchedule());
    dispatch(setEditModal(false));
    dispatch(setModalTitle(""));
    if (document.querySelector(".modal-wrapper")) {
      document
        .querySelector(".modal-wrapper")
        .classList.remove("modal-is-open");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-col mx-2">
        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
          <div className="px-6 py-2 border-b border-light-grey">
            <div className="flex flex-row justify-between">
              <div className="font-bold text-xl">Schedules Data</div>
              <button
                onClick={openModal}
                className="bg-blue-500 rounded text-white p-2 hover:bg-blue-700"
              >
                <span className="fa fa-plus"></span> Add Data
              </button>
            </div>
          </div>
          <TableSchedule
            data={data}
            editModal={editModal}
            deleteData={deleteData}
          />
        </div>
      </div>
      <ModalSchedule
        title={modal.title}
        closeModal={closeModal}
        schedule={schedule.schedule}
        postData={submitData}
      />
    </>
  );
}
