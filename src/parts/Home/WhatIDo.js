import React from "react";

export default function WhatIDo() {
  const things = [
    {
      title: "Analyze",
      description:
        "Menganalisa alur sistem, desain database, serta kebutuhan lainnya pada aplikasi yang dibuat dengan berdasarkan apa yang diinginkan oleh client.",
      image: require("../../assets/icons/analyze.png"),
    },
    {
      title: "Web Development",
      description:
        "Mendesain tampilan dan melakukan pengembangan serta pemeliharaan fitur pada aplikasi web dengan menggunakan teknologi mutakhir.",
      image: require("../../assets/icons/web-development.png"),
    },
    {
      title: "Build API Services",
      description:
        "Membuat dan mengembangkan layanan API untuk kebutuhan sistem aplikasi, serta melakukan integrasi aplikasi dengan layanan pihak ketiga.",
      image: require("../../assets/icons/web-api.png"),
    },
    {
      title: "Collaborate With Teams",
      description:
        "Melakukan analisis terhadap alur sistem, desain database, serta kebutuhan lainnya pada aplikasi yang dibuat dengan berdasarkan apa yang diinginkan oleh client.",
      image: require("../../assets/icons/collaborate-with-teams.png"),
    },
  ];
  return (
    <section className="h-100 px-4 py-12 mb-10">
      <h5 className="text-center text-3xl mb-12 font-medium">What I Do?</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {things.map(function (item) {
          return (
            <div className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-xl py-4 px-6 bg-gray-100 box-shadow-10 md:mx-0 mx-3">
              <img src={item.image} className="w-8" alt="img" />
              <h5 className="text-lg mt-2 mb-3">{item.title}</h5>
              <p className="text-md text-justify">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
