import React from "react";

function Navbar(props) {
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto">
        <div className="w-full relative flex items-center text-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
          </span>

          <a href="#" className="flex px-3 text-2xl">
            <p className="font-bold">EventC</p>
            <p className="">atcher</p>
          </a>

          <div className="lg:flex flex-grow items-center bg-transparent lg:shadow-none text-l font-medium">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a className={"px-6 py-4 lg:py-2 flex items-center"} href="#">
                  Schedule
                </a>
              </li>
              <li className="flex items-center">
                <a className={"px-6 py-4 lg:py-2 flex items-center"} href="#">
                  Speakers
                </a>
              </li>
              <li className="flex items-center">
                <a className={"px-6 py-4 lg:py-2 flex items-center"} href="#">
                  Ticket
                </a>
              </li>
              <li className="flex items-center">
                <a className={"px-6 py-4 lg:py-2 flex items-center"} href="#">
                  Contact
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    "mx-5 px-8 py-4 lg:py-2 flex items-center outline-2 outline rounded-full"
                  }
                  href="#"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
