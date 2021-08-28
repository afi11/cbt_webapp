import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/readytailwind.css";
import "./assets/styles/styles.css";
import "./assets/styles/custom.css";

import Admin from "./layouts/Admin";
import store from "./redux/store";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Auth from "./config/Auth";
import axios from "axios";
import Student from "./layouts/Student";

function App() {
  if (Auth.isAuthenticated()) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + Auth.getTokenAndUserId().token;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/student"
            render={() =>
              Auth.isStudentPage() ? <Student /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/admin"
            render={() =>
              Auth.isAdminPage() ? <Admin /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/login"
            render={() =>
              !Auth.hasLogin() ? (
                <Login />
              ) : Auth.isStudentPage() ? (
                <Redirect to="/student" />
              ) : (
                <Redirect to="/admin" />
              )
            }
          />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
