import React from "react";

export default function WhatIDo() {
  const things = [
    {
      title: "Analisa Sistem",
      description:
        "Menganalisa alur sistem, desain database, serta kebutuhan lainnya pada aplikasi yang dibuat dengan berdasarkan apa yang diinginkan oleh client.",
      image: require("../../assets/icons/analyze.png"),
    },
    {
      title: "Pengembangan Web",
      description:
        "Mendesain tampilan dan melakukan pengembangan serta pemeliharaan fitur pada aplikasi web dengan menggunakan teknologi mutakhir.",
      image: require("../../assets/icons/web-development.png"),
    },
    {
      title: "Membangun Layanan API",
      description:
        "Membuat, mengembangkan, dan memelihara sistem layanan API untuk kebutuhan aplikasi, serta melakukan integrasi aplikasi dengan layanan pihak ketiga.",
      image: require("../../assets/icons/web-api.png"),
    },
    {
      title: "Kolaborasi Antar Tim",
      description:
        "Melakukan kolaborasi dan komunikasi dengan tim yang terkait untuk mencegah terjadinya miskomunikasi serta dapat mencapai target bersama-sama.",
      image: require("../../assets/icons/collaborate-with-teams.png"),
    },
  ];
  return (
    <section className="h-100 px-4 py-12 mb-10 bg-slate-100">
      <h5 className="flex flex-col justify-center items-center text-center text-3xl mb-12 font-medium">
        Apa yang Saya Lakukan?
        <div className="border-b-2 md:w-96 w-56 pb-1 border-purple-500"></div>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {things.map(function (item) {
          return (
            <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-white box-shadow-10 md:mx-0 mx-3">
              <img src={item.image} className="w-8" alt="img" />
              <h5 className="text-lg font-medium mt-2 mb-3">{item.title}</h5>
              <p className="text-md text-justify">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
