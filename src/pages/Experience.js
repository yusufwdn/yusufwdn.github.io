import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Job from "../parts/Experience/Job";

export default function Experience() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-slate-100">
        <section className="flex flex-col items-center w-full h-100 py-12 mb-10 mt-12">
          <h5 className="text-center text-3xl mb-16 font-medium">
            <span className="border-b-2 border-purple-500">
              Pengalaman Bekerja
            </span>
          </h5>
          <Job />
        </section>
      </div>
      <Footer />
    </>
  );
}
