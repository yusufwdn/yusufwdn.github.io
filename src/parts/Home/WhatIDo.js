import React from "react";

export default function WhatIDo() {
  return (
    <section className="h-100 px-4 py-10 mb-10">
      <h5 className="text-center text-3xl mb-12 font-medium">What I Do?</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-gray-100 box-shadow-1">
          <img
            src={require("../../assets/icons/analyze.png")}
            className="w-8"
            alt="img"
          />
          <h5 className="text-lg mt-2 mb-3">Analyze</h5>
          <p className="text-sm text-justify">
            Menganalisa alur sistem, desain database, serta kebutuhan lainnya
            pada aplikasi yang dibuat dengan berdasarkan apa yang diinginkan
            oleh client.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-gray-100 box-shadow-1">
          <img
            src={require("../../assets/icons/web-development.png")}
            className="w-8"
            alt="img"
          />
          <h5 className="text-lg mt-2 mb-3">Web Development</h5>
          <p className="text-sm text-justify">
            Mendesain tampilan dan melakukan pengembangan serta pemeliharaan
            fitur pada aplikasi web dengan menggunakan teknologi mutakhir.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-gray-100 box-shadow-1">
          <img
            src={require("../../assets/icons/web-api.png")}
            className="w-8"
            alt="img"
          />
          <h5 className="text-lg mt-2 mb-3">Build API Services</h5>
          <p className="text-sm text-justify">
            Membuat dan mengembangkan layanan API untuk kebutuhan sistem
            aplikasi, serta melakukan integrasi aplikasi dengan layanan pihak
            ketiga.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-gray-100 box-shadow-1">
          <img
            src={require("../../assets/icons/collaborate-with-teams.png")}
            className="w-8"
            alt="img"
          />
          <h5 className="text-lg mt-2 mb-3">Collaborate With Teams</h5>
          <p className="text-sm text-justify">
            Melakukan analisis terhadap alur sistem, desain database, serta
            kebutuhan lainnya pada aplikasi yang dibuat dengan berdasarkan apa
            yang diinginkan oleh client.
          </p>
        </div>
      </div>
    </section>
  );
}
