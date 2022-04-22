import React from "react";
import Image from "next/image";
import img from "../assets/images/image3.png";

function CreateEvent() {
  return (
    <section className="relative mt-24 mb-12 " style={{ minHeight: "30vh" }}>
      <div className="absolute bottom-0 w-full h-4/5 bg-fuchsia-200">
        <div className="absolute right-0 w-1/2 h-full">
          <div className="flex flex-col w-1/2 h-full py-4 justify-evenly">
            <h1 className="text-3xl font-bold ">Make your own Event</h1>
            <p className="">
              Create your own free event today with EventCatcher!
            </p>
            <a
              href="#"
              className="py-4 mx-4 text-center text-white bg-pink-500 rounded-full shadow-lg shadow-gray-400"
            >
              Create Events
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full">
        <div className="container w-full h-full px-4 mx-auto">
          <div className="relative flex flex-grow w-full h-full">
            <div className="absolute w-1/2 h-full">
              <Image
                src={img}
                alt="svg pic from undraw"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateEvent;
