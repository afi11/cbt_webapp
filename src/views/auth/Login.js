import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeFormUser, loginUser } from "../../redux";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitData = () => {
    dispatch(loginUser(auth.user));
  };

  return (
    <>
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium text-center text-lg font-bold">
                  Login
                </p>
                <div className="">
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
                    placeholder="Email User"
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
                <div className="mt-4 items-center justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="button"
                    onClick={submitData}
                  >
                    Login
                  </button>
                </div>
                <Link
                  className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                  to="/register"
                >
                  Not registered ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
