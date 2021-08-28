import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                {auth.messageError != null ? (
                  <div className="bg-red-600 px-2 py-3 rounded text-white mt-3">
                    <h4 className="alert-heading">
                      Please Notice Error Bellow!
                    </h4>
                    {auth.messageError.name != null ? (
                      <li>{auth.messageError.name}</li>
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
                <p className="text-gray-800 font-medium text-center text-lg font-bold">
                  Register
                </p>
                <div className="mt-2">
                  <label className="block text-sm text-gray-00" for="name">
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="name"
                    value={auth.user.name}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    placeholder="Name"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-gray-00" for="email">
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="email"
                    value={auth.user.email}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    name="email"
                    type="email"
                    required=""
                    placeholder="Email Address"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-gray-600" for="password">
                    Password
                  </label>
                  <input
                    className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                    id="password"
                    name="password"
                    type="password"
                    value={auth.user.password}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    required=""
                    placeholder="*******"
                    aria-label="password"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-gray-600" for="password">
                    Password Confirmation
                  </label>
                  <input
                    className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                    type="password"
                    name="password_confirmation"
                    value={auth.user.password_confirmation}
                    onChange={(e) => dispatch(changeFormUser(e))}
                    required=""
                    placeholder="*******"
                    aria-label="password"
                  />
                </div>
                <div className="mt-4 items-center justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="button"
                    onClick={submitRegister}
                  >
                    Sign Up
                  </button>
                </div>
                <Link
                  className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                  to="/login"
                >
                  Already Register ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
