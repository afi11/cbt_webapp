import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside
        id="sidebar"
        className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block"
      >
        <ul className="list-reset flex flex-col">
          <li
            className={
              "w-full h-full py-3 px-2 border-b border-light-border " +
              (window.location.href.indexOf("/admin/dashboard") !== -1
                ? "bg-white"
                : "")
            }
          >
            <Link
              className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              to="/admin/dashboard"
            >
              <i className="fas fa-tachometer-alt float-left mx-2"></i>
              Dashboard
              <span>
                <i className="fas fa-angle-right float-right"></i>
              </span>
            </Link>
          </li>
          <li
            className={
              "w-full h-full py-3 px-2 border-b border-light-border " +
              (window.location.href.indexOf("/admin/schedules") !== -1
                ? "bg-white"
                : "")
            }
          >
            <Link
              className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              to="/admin/schedules"
            >
              <i className="fas fa-calendar-week float-left mx-2"></i>
              Schedules
              <span>
                <i className="fas fa-angle-right float-right"></i>
              </span>
            </Link>
          </li>
          <li
            className={
              "w-full h-full py-3 px-2 border-b border-light-border " +
              (window.location.href.indexOf("/admin/questions") !== -1
                ? "bg-white"
                : "")
            }
          >
            <Link
              className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              to="/admin/questions"
            >
              <i className="fa fa-tasks float-left mx-2"></i>
              Questions
              <span>
                <i className="fas fa-angle-right float-right"></i>
              </span>
            </Link>
          </li>
          <li
            className={
              "w-full h-full py-3 px-2 border-b border-light-border " +
              (window.location.href.indexOf("/admin/scores") !== -1
                ? "bg-white"
                : "")
            }
          >
            <Link
              className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline"
              to="/admin/scores"
            >
              <span className="fa fa-star float-left mx-2"></span> Scores
              <span>
                <i className="fas fa-angle-right float-right"></i>
              </span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* <div className="bg-white shadow" id="sidebar-wrapper">
        <div className="sidebar-heading shadow-sm bg-white">
          Start Bootstrap
        </div>
        <ul className="list-unstyled mt-3">
          <li>
            <Link
              className={
                "nav-link p-3 " +
                (window.location.href.indexOf("/admin/dashboard") !== -1
                  ? "active-sidebar"
                  : "")
              }
              to="/admin/dashboard"
            >
              <span className="fa fa-tachometer-alt"></span>
              <span className="nav__name"> Dashboard</span>
            </Link>
            <Link
              className={
                "nav-link p-3 " +
                (window.location.href.indexOf("/admin/schedules") !== -1
                  ? "active-sidebar"
                  : "")
              }
              to="/admin/schedules"
            >
              <span className="fa fa-calendar-week"></span>
              <span className="nav__name"> Schedules</span>
            </Link>
            <Link
              className={
                "nav-link p-3 " +
                (window.location.href.indexOf("/admin/questions") !== -1
                  ? "active-sidebar"
                  : "")
              }
              to="/admin/questions"
            >
              <span className="fa fa-tasks"></span>
              <span className="nav__name"> Questions</span>
            </Link>
            <Link
              className={
                "nav-link p-3 " +
                (window.location.href.indexOf("/admin/scores") !== -1
                  ? "active-sidebar"
                  : "")
              }
              to="/admin/scores"
            >
              <span className="fa fa-star"></span>
              <span className="nav__name"> Scores</span>
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
