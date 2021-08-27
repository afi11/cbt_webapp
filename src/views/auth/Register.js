import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeFormUser, registerUser } from "../../redux";

export default function Register() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitRegister = () => {
    dispatch(registerUser(auth.user));
  };

  return (
    <>
      {auth.isSuccessAuth ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/register" />
      )}
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
        <div className="auth-box bg-dark border-top border-secondary">
          <div>
            <div className="text-center p-t-20 p-b-20">
              <span className="db">
                <img src="../../assets/images/logo.png" alt="logo" />
              </span>
            </div>
            {auth.messageError != null ? (
              <div className="alert alert-danger mt-3" role="alert">
                <h4 className="alert-heading">Please Notice Error Bellow!</h4>
                {auth.messageError.name != null ? (
                  <li>{auth.messageError.nam}</li>
                ) : (
                  ""
                )}
                {auth.messageError.email != null ? (
                  <li>{auth.messageError.email}</li>
                ) : (
                  ""
                )}
                {auth.messageError.password != null ? (
                  <li>{auth.messageError.password}</li>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <></>
            )}
            <div className="row p-b-30 mt-4">
              <div className="col-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-success text-white"
                      id="basic-addon1"
                    >
                      <i className="ti-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    value={auth.user.name}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    placeholder="Name"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-danger text-white"
                      id="basic-addon1"
                    >
                      <i className="ti-email"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={auth.user.email}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-warning text-white"
                      id="basic-addon2"
                    >
                      <i className="ti-pencil"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={auth.user.password}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text bg-info text-white"
                      id="basic-addon2"
                    >
                      <i className="ti-pencil"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password_confirmation"
                    value={auth.user.password_confirmation}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    className="form-control form-control-lg"
                    placeholder=" Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group mt-3">
                  <div className="p-t-20">
                    <button
                      className="btn btn-block btn-lg btn-info"
                      type="button"
                      onClick={submitRegister}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
