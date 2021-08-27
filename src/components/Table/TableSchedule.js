import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import InputSearch from "../../components/Form/InputSearch";

export default function TableSchedule({ data, editModal, deleteData }) {
  const SCHEDULE_COLUMN = [
    {
      Header: "Day",
      accessor: "day",
    },
    {
      Header: "Time Start",
      accessor: "time_start",
      disableFilters: true,
    },
    {
      Header: "Time End",
      accessor: "time_end",
      disableFilters: true,
    },
    {
      Header: "Duration",
      accessor: "duration",
      disableFilters: true,
    },
    {
      Header: "Description",
      accessor: "desc",
      disableFilters: true,
    },
    {
      Header: "Action",
      accessor: "id",
      disableFilters: true,
      Cell: (props) => {
        return (
          <>
            <button
              className="bg-purple-500 w-full text-white rounded p-2 hover:bg-purple-700"
              onClick={() => editModal(props.row.original)}
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              <span className="fa fa-edit"></span>
            </button>{" "}
            <button
              className="bg-red-500 w-full mt-2 text-white rounded p-2 hover:bg-red-700"
              onClick={() => deleteData(props.row.original)}
            >
              <span className="fa fa-trash"></span>
            </button>
          </>
        );
      },
    },
  ];

  const columns = useMemo(() => SCHEDULE_COLUMN, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: InputSearch,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <>
      <div className="table-responsive">
        <table className="table text-grey-darkest" {...getTableProps()}>
          <thead className="bg-grey-dark text-white text-normal">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    &nbsp;
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fas fa-caret-down text-white"></i>
                      ) : (
                        <i className="fas fa-caret-up text-white"></i>
                      )
                    ) : (
                      ""
                    )}
                    <div className="form-filter">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-between mt-2 mb-3 ml-2 mr-2">
        <div>
          <label className="font-medium">
            Showing {pageIndex + 1} of {pageOptions.length},
          </label>
          <div className="flex mt-2 flex-row">
            <label className="font-medium">Go to page</label>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button
            className="text-gray-700 px-4 py-2 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => gotoPage(0)}
          >
            <span className="fa fa-angle-double-left"></span>
          </button>
          <button
            className="text-gray-700 px-4 py-2 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            className="text-gray-700 px-4 py-2 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <i className="fas fa-angle-right"></i>
          </button>
          <button
            className="text-gray-700 px-4 py-2 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            onClick={() => gotoPage(pageCount - 1)}
          >
            <span className="fa fa-angle-double-right"></span>
          </button>
        </div>
      </div>
    </>
  );
}
