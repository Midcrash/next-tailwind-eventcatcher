import React from "react";
import Image from "next/image";
import img from "../assets/images/korean.png";

function Card() {
  return (
    <div className="relative flex flex-row justify-between min-w-0 mb-12">
      <div className="md:w-[22.5rem] md:h-[23.5rem] rounded-2xl bg-white  shadow-lg dark:shadow-slate-400 flex flex-col ease-linear duration-300">
        <span className="relative w-full h-full overflow-hidden rounded-t-2xl basis-3/5">
          <Image
            src={img}
            alt="picture of korean group"
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div className="flex content-center justify-center flex-grow">
          <span className="flex flex-col content-center justify-center mx-3 mb-10">
            <p className="text-xs font-bold text-indigo-600">APR</p>
            <p className="self-center text-2xl font-bold">14</p>
          </span>
          <span className="flex flex-col justify-center mx-3">
            <p className="relative font-bold">
              Wonder Girls 2010 Wonder Girls World Tour San Francisco
            </p>

            <p className="relative bottom-6 top-2">
              We'll get you directly seated and inside for you to enjoy the
              show.
            </p>
          </span>
        </div>
      </div>
      <div className="md:w-[22.5rem] md:h-[23.5rem] rounded-2xl bg-white  shadow-lg dark:shadow-slate-400 flex flex-col ease-linear duration-300">
        <span className="relative w-full h-full overflow-hidden rounded-t-2xl basis-3/5">
          <Image
            src={img}
            alt="picture of korean group"
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div className="flex content-center justify-center flex-grow">
          <span className="flex flex-col content-center justify-center mx-3 mb-10">
            <p className="text-xs font-bold text-indigo-600">APR</p>
            <p className="self-center text-2xl font-bold">14</p>
          </span>
          <span className="flex flex-col justify-center mx-3">
            <p className="relative font-bold">
              Wonder Girls 2010 Wonder Girls World Tour San Francisco
            </p>

            <p className="relative bottom-6 top-2">
              We'll get you directly seated and inside for you to enjoy the
              show.
            </p>
          </span>
        </div>
      </div>
      <div className="md:w-[22.5rem] md:h-[23.5rem] rounded-2xl bg-white  shadow-lg dark:shadow-slate-400 flex flex-col ease-linear duration-300">
        <span className="relative w-full h-full overflow-hidden rounded-t-2xl basis-3/5">
          <Image
            src={img}
            alt="picture of korean group"
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div className="flex content-center justify-center flex-grow">
          <span className="flex flex-col content-center justify-center mx-3 mb-10">
            <p className="text-xs font-bold text-indigo-600">APR</p>
            <p className="self-center text-2xl font-bold">14</p>
          </span>
          <span className="flex flex-col justify-center mx-3">
            <p className="relative font-bold">
              Wonder Girls 2010 Wonder Girls World Tour San Francisco
            </p>

            <p className="relative bottom-6 top-2">
              We'll get you directly seated and inside for you to enjoy the
              show.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
