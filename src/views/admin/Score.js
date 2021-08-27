import React, { useEffect, useState } from "react";
import TableScore from "../../components/Table/TableScore";
import { GET_DATA } from "../../services/get";

export function Score() {
  const [data, setData] = useState([]);

  const getScoreData = () => {
    GET_DATA("scores").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getScoreData();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-col mx-2">
        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
          <div className="px-6 py-2 border-b border-light-grey">
            <div className="flex flex-row justify-between">
              <div className="font-bold text-xl">Scores Data</div>
            </div>
          </div>
          <TableScore data={data} />
        </div>
      </div>
    </>
  );
}
