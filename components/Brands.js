import React from "react";
import Image from "next/image";
import img from "../assets/images/Group34.png";

function Brands() {
  return (
    <section
      className="container relative py-4 mx-auto mt-12"
      style={{ minHeight: "25vh" }}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col text-center">
          <p className="py-3 text-4xl font-bold text-slate-900">
            Join these brands
          </p>
          <p className="py-3 text-sm text-gray-500 px-96">
            We've had the pleasure of working with industry-defining brands.
            These are just some of them.
          </p>
        </div>
        <div className="">
          <div className="absolute w-full h-full">
            <Image
              src={img}
              alt="company logos"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
