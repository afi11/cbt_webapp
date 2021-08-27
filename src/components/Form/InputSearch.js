import React from "react";

const InputSearch = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        type="text"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mt-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Data...."
      />
    </span>
  );
};

export default InputSearch;
