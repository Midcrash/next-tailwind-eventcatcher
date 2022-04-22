import React from "react";
import Image from "next/image";
import img from "../assets/images/bp3.png";
import BottomHero from "./BottomHero";

function Hero() {
  return (
    <main>
      <div
        className="relative mx-auto flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute w-full h-full px-2 bg-center bg-no-repeat bg-cover bg-texture">
          <div className="container mx-auto flex h-full">
            <div className="relative basis-2/3">
              <span className="absolute w-full h-5/6 bottom-0 mb-14 ">
                <Image
                  src={img}
                  alt="Picture of BTS"
                  className=""
                  layout="fill"
                  objectFit="contain"
                />
              </span>
            </div>
            <div className="right justify-center items-center flex h-full basis-1/3">
              <span className="flex flex-col text-white">
                <h1 className="text-4xl font-bold pb-2">SBS MTV The Kpop </h1>
                <h1 className="text-4xl font-bold pt-2">Show Ticket Package</h1>
                <br></br>
                <p className="text-lg font-light">
                  Look no further! Our SBS The Show tickets are the simplest way
                  for you to experience a live Kpop recording.
                </p>
                <br></br>
                <div className="buttons flex ">
                  <a
                    href="#"
                    className="rounded-full px-10 py-3 border-2 mr-2 border-red-600 bg-red-600"
                  >
                    Get Ticket
                  </a>
                  <a className="rounded-full px-10 py-3 border-2 ml-2">
                    Learn More
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
