import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../views/admin/Dashboard";
import Schedule from "../views/admin/Schedule";
import Question from "../views/admin/Question";
import { Score } from "../views/admin/Score";

export default function Admin() {
  return (
    <>
      <div className="mx-auto bg-gray-200">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="bg-white-300 flex-1 p-3 overflow-hidden">
              <Switch>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/schedules" exact component={Schedule} />
                <Route path="/admin/questions" exact component={Question} />
                <Route path="/admin/scores" exact component={Score} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
