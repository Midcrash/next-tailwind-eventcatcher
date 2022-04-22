import React from "react";
import Image from "next/image";
import img from "../assets/images/blog.png";

function Blog() {
  return (
    <section
      className="container px-4 mx-auto mt-16 mb-12"
      style={{ minHeight: "25vh" }}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col h-full text-center">
          <p className="text-4xl font-bold text-slate-900">Blog</p>
          <p className="right-0 pt-6 text-sm text-gray-500 px-96">
            Check out our enticing blogs about events around the globe!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-12">
        <div className="md:w-[22.5rem] md:h-[25rem] rounded-2xl bg-white   flex flex-col ease-linear duration-300">
          <span className="relative w-full h-full overflow-hidden rounded-2xl basis-3/5">
            <Image
              src={img}
              alt="picture of korean group"
              layout="fill"
              objectFit="cover"
            />
          </span>
          <br></br>
          <div className="flex content-center justify-center flex-grow">
            <span className="flex flex-col justify-between">
              <p className="self-center text-lg font-bold text-slate-900">
                6 Strategies to Find Your Conference Keynote and Other Speakers
              </p>
              <p className="bottom-6 top-2">
                We'll get you directly seated and inside for you to enjoy the
                show.
              </p>
              <p className="text-sm text-gray-500">12 Mar - John Doe</p>
            </span>
          </div>
        </div>
        <div className="md:w-[22.5rem] md:h-[25rem] rounded-2xl bg-white   flex flex-col ease-linear duration-300">
          <span className="relative w-full h-full overflow-hidden rounded-2xl basis-3/5">
            <Image
              src={img}
              alt="picture of korean group"
              layout="fill"
              objectFit="cover"
            />
          </span>
          <br></br>
          <div className="flex content-center justify-center flex-grow">
            <span className="flex flex-col justify-between">
              <p className="self-center text-lg font-bold text-slate-900">
                6 Strategies to Find Your Conference Keynote and Other Speakers
              </p>
              <p className="bottom-6 top-2">
                We'll get you directly seated and inside for you to enjoy the
                show.
              </p>
              <p className="text-sm text-gray-500">12 Mar - John Doe</p>
            </span>
          </div>
        </div>
        <div className="md:w-[22.5rem] md:h-[25rem] rounded-2xl bg-white   flex flex-col ease-linear duration-300">
          <span className="relative w-full h-full overflow-hidden rounded-2xl basis-3/5">
            <Image
              src={img}
              alt="picture of korean group"
              layout="fill"
              objectFit="cover"
            />
          </span>
          <br></br>
          <div className="flex content-center justify-center flex-grow">
            <span className="flex flex-col justify-between">
              <p className="self-center text-lg font-bold text-slate-900">
                6 Strategies to Find Your Conference Keynote and Other Speakers
              </p>
              <p className="bottom-6 top-2">
                We'll get you directly seated and inside for you to enjoy the
                show.
              </p>
              <p className="text-sm text-gray-500">12 Mar - John Doe</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
