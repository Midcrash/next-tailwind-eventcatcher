import React from "react";
import Image from "next/image";
import img from "../assets/images/bp3.png";
import BottomHero from "./BottomHero";

function Hero() {
  return (
    <main>
      <div
        className="relative flex items-center content-center justify-center mx-auto"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute w-full h-full px-2 bg-center bg-no-repeat bg-cover bg-texture">
          <div className="container flex h-full mx-auto">
            <div className="relative basis-2/3">
              <span className="absolute bottom-0 w-full mb-20 h-5/6 ">
                <Image
                  src={img}
                  alt="Picture of BTS"
                  className=""
                  layout="fill"
                  objectFit="contain"
                />
              </span>
            </div>
            <div className="flex items-center justify-center h-full right basis-1/3">
              <span className="flex flex-col text-white">
                <h1 className="pb-2 text-4xl font-bold">SBS MTV The Kpop </h1>
                <h1 className="pt-2 text-4xl font-bold">Show Ticket Package</h1>
                <br></br>
                <p className="w-4/5 text-lg font-light">
                  Look no further! Our SBS The Show tickets are the simplest way
                  for you to experience a live Kpop recording.
                </p>
                <br></br>
                <div className="flex buttons ">
                  <a
                    href="#"
                    className="px-10 py-3 mr-2 bg-red-600 border-2 border-red-600 rounded-full"
                  >
                    Get Ticket
                  </a>
                  <a className="px-10 py-3 ml-2 border-2 rounded-full">
                    Learn More
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <BottomHero />
    </main>
  );
}

export default Hero;
