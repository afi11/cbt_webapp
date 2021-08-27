import React from "react";
import { profileToggle, sidebarToggle } from "../ComponentFunctions/ComponentFunctions";

export default function Navbar() {
  
  return (
    <>
      <header className="bg-nav">
        <div className="flex justify-between">
          <div className="p-1 mx-3 inline-flex items-center">
            <i
              className="fas fa-bars pr-2 text-white"
              onClick={sidebarToggle}
            ></i>
            <h1 className="text-white p-2">Logo</h1>
          </div>
          <div className="p-1 flex flex-row items-center">
            
            <img
              onclick="profileToggle()"
              className="inline-block h-8 w-8 rounded-full"
              src={"../../assets/img/default.jpg"}
              alt=""
            />
            <span
              href="#"
              onClick={profileToggle}
              className="text-white p-2 no-underline hidden md:block lg:block"
            >
              Adam Wathan
            </span>
            <div
              id="ProfileDropDown"
              className="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r"
            >
              <ul className="list-reset">
                <li>
                  <a
                    href="#"
                    className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                  >
                    My account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                  >
                    Notifications
                  </a>
                </li>
                <li>
                  <hr className="border-t mx-2 border-grey-ligght" />
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
