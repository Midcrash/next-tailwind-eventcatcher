import React from "react";
import Image from "next/image";
import img1 from "../assets/images/in.png";
import img2 from "../assets/images/fb.png";
import img3 from "../assets/images/twitter.png";

function Footer() {
  return (
    <section className="bg-slate-900" style={{ minHeight: "35vh" }}>
      <div className="container flex justify-between w-full h-full px-4 mx-auto">
        <div className="basis-1/4">
          <div className="flex flex-row pt-8 text-white">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
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

            <a href="#" className="flex self-center px-3 text-2xl">
              <p className="font-bold">EventC</p>
              <p className="">atcher</p>
            </a>
          </div>
          <div className="mt-3 text-white ">
            <p>
              Eventick is a global self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
          </div>
          <div className="mt-3">
            <a className="" href="#">
              <Image src={img2} alt="icon" />
            </a>
            <a className="mx-1" href="#">
              <Image src={img3} alt="icon" />
            </a>
            <a className="mx-1" href="#">
              <Image src={img1} alt="icon" />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col gap-5 text-white pt-9">
          <p className="text-xl font-bold">Plan Events</p>
          <span className="flex flex-col gap-1">
            <p>Create and Set Up</p>
            <p>Sell Tickets</p>
            <p>Online RSVP</p>
            <p>Online Events</p>
          </span>
        </div>
        <div className="relative flex flex-col gap-5 text-white pt-9">
          <p className="text-xl font-bold">Eventick</p>
          <span className="flex flex-col gap-1">
            <p>About Us</p>
            <p>Press</p>
            <p>Contact Us</p>
            <p>Help Center</p>
            <p>How it Works</p>
            <p>Privacy</p>
            <p>Terms</p>
          </span>
        </div>
        <div className="relative flex flex-col gap-5 text-white pt-9">
          <p className="text-xl font-bold">Stay In The Loop</p>
          <span className="flex flex-col gap-4">
            <p className="">
              Join our mailing list to stay in the loop with our newest for{" "}
              <br></br>
              Event and concert
            </p>
            <span className="w-full">
              <input
                className="w-full px-3 py-3 text-black bg-white rounded-full"
                placeholder="Input E-mail Address"
              ></input>
              <a className="absolute py-2 z-10 w-2/6 -ml-[10rem] text-center bg-pink-500 rounded-full my-1">
                Subscribe Now
              </a>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
