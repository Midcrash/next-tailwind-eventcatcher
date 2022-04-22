import React from "react";
import Card from "./Card";

function MiddleSection() {
  return (
    <div className="container px-4 mx-auto mt-24">
      <div className="flex content-center justify-between text-slate-900">
        <span className="flex justify-start text-3xl font-bold">
          <h1 className="">Upcoming Events</h1>
        </span>
        <span className="flex justify-around text-lg">
          <a className="flex mx-5 bg-gray-200 rounded-full" href="#">
            <p className="mx-5 my-2">Weekdays</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-full mx-3 text-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="flex mx-5 bg-gray-200 rounded-full" href="#">
            <p className="mx-5 my-2">Event Type</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-full mx-3 text-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="flex mx-5 bg-gray-200 rounded-full" href="#">
            <p className="mx-5 my-2">Any Category</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-full mx-3 text-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </span>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full px-4 ml-auto mr-auto">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
