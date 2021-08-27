import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardTopScore from "../../components/Card/CardTopScore";
import { getDataDashboard } from "../../redux";

export default function Dashboard() {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataDashboard());
  }, []);

  return (
    <>
      <div classNameNameName="flex flex-col">
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
          <div className="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <span className="no-underline text-white text-2xl">
                {dashboard.score_low}
              </span>
              <span className="no-underline text-white text-lg">
                Lowest Score
              </span>
            </div>
          </div>
          <div className="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <span className="no-underline text-white text-2xl">
                {dashboard.score_high}
              </span>
              <span className="no-underline text-white text-lg">
                Highest Score
              </span>
            </div>
          </div>
          <div className="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <span className="no-underline text-white text-2xl">
                {dashboard.n_user}
              </span>
              <span className="no-underline text-white text-lg">
                Total User
              </span>
            </div>
          </div>
          <div className="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
            <div className="p-4 flex flex-col">
              <span className="no-underline text-white text-2xl">
                {dashboard.n_question}
              </span>
              <span className="no-underline text-white text-lg">
                Total Questions
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row lg:flex-row">
          <div className="flex flex-1 flex-col mx-2 mt-5">
            <h5 className="text-xl text-gray-600 font-semibold">
              Top 5 Highest Score{" "}
              <span className="fa fa-angle-up text-green-600"></span>
            </h5>
            {dashboard.list_score_high.map((row) => (
              <CardTopScore
                photo={row.photo}
                name={row.name}
                email={row.email}
                score={row.score}
                ishigh={true}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col mx-2 mt-5">
            <h5 className="text-xl text-gray-600 font-semibold">
              Top 5 Lowest Score{" "}
              <span className="fa fa-angle-down text-red-600"></span>
            </h5>
            {dashboard.list_score_low.map((row) => (
              <CardTopScore
                photo={row.photo}
                name={row.name}
                email={row.email}
                score={row.score}
                ishigh={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
