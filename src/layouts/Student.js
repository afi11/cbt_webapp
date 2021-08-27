import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavbarStudent from "../components/Navbar/NavbarStudent";
import { GET_DATA } from "../services/get";
import Exam from "../views/student/Exam";
import Home from "../views/student/Home";

export default function Student() {
  useEffect(() => {
    GET_DATA("schedule");
  }, []);

  return (
    <>
      <div className="mx-auto bg-gray-200">
        <div className="min-h-screen flex flex-col">
          <NavbarStudent />
          <main className="w-full p-3 overflow-hidden flex sm:flex-col md:flex-col">
            <Switch>
              <Route path="/student" exact component={Home} />
              <Route path="/student/exam/:id" exact component={Exam} />
              <Redirect from="/" to="/student" />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}
