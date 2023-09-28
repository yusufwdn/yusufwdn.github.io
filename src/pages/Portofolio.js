import React from "react";

import Header from "../parts/Header";

export default function Portofolio() {
  return (
    <>
      <Header />
      <section className="flex items-center w-full h-screen px-5 dark:bg-black ">
        <div className="flex flex-col items-center justify-center w-full z-20">
          <h2 className="text-6xl text-dark dark:text-white">My Portofolio</h2>
        </div>
      </section>
    </>
  );
}
