import React from "react";

import Header from "../parts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex items-center w-full h-screen px-5 dark:bg-black ">
        <div className="flex flex-col items-center justify-center w-full z-20">
          <h2 className="text-6xl text-dark dark:text-white">Yusuf Wandana</h2>
          <h3 className="text-xl dark:text-white mt-2">
            Back-End Developer | Web Developer
          </h3>
          <div className="text-xl"></div>
        </div>
      </section>
    </>
  );
}
