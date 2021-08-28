import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../config/Auth";
import { getUserData } from "../../redux";
import { urlPhoto } from "../../services/url";
import {
  profileToggle,
  sidebarToggle,
} from "../ComponentFunctions/ComponentFunctions";

export default function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserData(Auth.getTokenAndUserId().userid));
  }, []);

  const logout = () => {
    Auth.destroyToken();
    window.location.reload();
  };

  return (
    <>
      <header className="bg-nav">
        <div className="flex justify-between">
          <div className="p-1 mx-3 inline-flex items-center">
            <i
              className="fas fa-bars pr-2 text-white"
              onClick={sidebarToggle}
            ></i>
            <h1 className="text-white p-2">
              <span className="fa fa-desktop"></span> Ujon
            </h1>
          </div>
          <div className="p-1 flex flex-row items-center">
            <img
              onClick={profileToggle}
              className="inline-block h-8 w-8 rounded-full"
              src={urlPhoto + auth.user.photo}
              alt=""
            />
            <span
              href="#"
              onClick={profileToggle}
              className="text-white p-2 no-underline hidden md:block lg:block"
            >
              {auth.user.name}
            </span>
            <div
              id="ProfileDropDown"
              className="rounded hidden shadow-md bg-white absolute pin-t mt-24 mr-1 pin-r"
            >
              <ul className="list-reset">
                <li>
                  <button
                    type="button"
                    onClick={logout}
                    className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                  >
                    Logout <span className="fa fa-sign-out-alt"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
