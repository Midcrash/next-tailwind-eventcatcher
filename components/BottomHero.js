import React from "react";

function BottomHero() {
  return (
    <section className="relative pb-20 -mt-20" style={{ minHeight: "20vh" }}>
      <div className="absolute w-full h-full">
        <div className="container mx-auto h-full drop-shadow-2xl">
          <div className="border-2 border-slate-900 bg-slate-900 h-full w-full rounded-3xl">
            <div className="flex justify-between h-full w-full text-white">
              <span className="flex flex-col justify-center mx-12">
                <p className="mb-2 text-lg font-light">Search Event</p>
                <input
                  className="bg-transparent border-b outline-none text-2xl"
                  placeholder="Konser Jazz"
                ></input>
              </span>
              <span className="flex flex-col justify-center">
                <p className="mb-2 text-lg font-light">Place</p>
                <input
                  className="bg-transparent border-b outline-none text-2xl"
                  placeholder="Korea"
                ></input>
              </span>
              <span className="flex flex-col justify-center mx-12">
                <p className="mb-2 text-lg font-light">Time</p>
                <input
                  className="bg-transparent border-b outline-none text-2xl"
                  placeholder="Any date"
                ></input>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomHero;
