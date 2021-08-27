import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFormUser, loginUser } from "../../redux";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitData = () => {
    dispatch(loginUser(auth.user));
  };

  return (
    <>
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
        <div className="auth-box bg-dark border-top border-secondary">
          <div>
            <div className="text-center p-t-20 p-b-20">
              <span className="db">
                <img src="../../assets/images/logo.png" alt="logo" />
              </span>
            </div>
            <div className="row p-b-30 mt-4">
              <div className="col-12">
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
              </div>
            </div>
            <div className="row border-top border-secondary">
              <div className="col-12">
                <div className="form-group mt-3">
                  <div className="p-t-20">
                    <button
                      className="btn btn-block btn-lg btn-info"
                      type="button"
                      onClick={submitData}
                    >
                      Log In
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
