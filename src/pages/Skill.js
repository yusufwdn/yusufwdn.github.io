import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";

function Stars({ total }) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    let imgUrl =
      i <= total
        ? "https://img.icons8.com/parakeet/48/star.png"
        : "https://img.icons8.com/deco/48/star.png";

    result.push(imgUrl);
  }

  return (
    <div className="flex flex-wrap justify-center mt-3 mb-5">
      {result.map(function (imgUrl, key) {
        return (
          <img
            key={`star.${key}`}
            className="w-5 md:mx-1 mx-0"
            width="48"
            height="48"
            src={imgUrl}
            alt="star"
          />
        );
      })}
    </div>
  );
}

export default function Skill() {
  const skills = [
    {
      title: "Laravel / Lumen",
      star: 9,
      description:
        "Dengan pengalaman bekerja lebih dari 2 tahun, saya telah mengerjakan berbagai proyek dengan studi kasus beragam. Tentunya saya telah memiliki pemahaman yang kuat tentang lingkungan dan kerangka kerja Laravel.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo.png",
        alt: "external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo",
      },
    },
    {
      title: "Livewire",
      star: 8,
      description:
        "Memiliki pemahaman yang cukup kuat dalam pengembangan web menggunakan Livewire. Karena saya sudah mengerjakan beberapa proyek dengan menggunakan Livewire sebagai komponen pendukung dari proyek yang berbasis Laravel.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://icon.icepanel.io/Technology/svg/Livewire.svg",
        alt: "livewire-logo-from-tech-icons",
      },
    },
    {
      title: "Bootstrap",
      star: 9,
      description:
        "Saya cukup mahir dalam menggunakan Bootstrap. Karena selama tergabung dalam suatu proyek berbasis web, saya sering kali menggunakan Bootstrap sebagai kerangka kerja untuk styling dan layouting.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo.png",
        alt: "external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo",
      },
    },
    {
      title: "TailwindCSS",
      star: 7,
      description:
        "Saya memiliki pemahaman serta kemampuan yang cukup baik dalam melakukan styling dan layouting dengan menggunakan TailwindCSS pada suatu proyek aplikasi berbasis web.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/fluency/48/tailwind_css.png",
        alt: "tailwind_css",
      },
    },
    {
      title: "Node Js",
      star: 6,
      description:
        "Memiliki pemahaman dan pengetahuan yang cukup baik pada fundamental Node Js, saya dapat membuat layanan RESTful API beserta unit testing sederhana.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/fluency/48/node-js.png",
        alt: "node-js",
      },
    },
    {
      title: "React Js",
      star: 6,
      description:
        "Memiliki pemahaman dan pengetahuan dasar pada fitur yang terdapat di dalam React Js seperti slicing html, react component, state management, integrasi API, dan dasar-dasar hooks.",
      imageComponent: {
        width: "100",
        height: "100",
        src: "https://img.icons8.com/plasticine/100/react.png",
        alt: "react",
      },
    },
    {
      title: "Go",
      star: 5,
      description:
        "Memiliki pemahaman dan pengetahuan dasar dalam lingkungan kerja Go. Saya telah memiliki kemampuan untuk membuat RESTful API sederhana dengan menggunakan Gin.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://icon.icepanel.io/Technology/svg/Go.svg",
        alt: "golang-icon-from-tech-icons",
      },
    },
    {
      title: "MySQL",
      star: 7,
      description:
        "Memiliki pengalaman, pemahaman, dan pengetahuan yang baik dalam pengoperasian query untuk keperluan transaksi database. Saya juga mampu merancang database untuk keperluan sistem aplikasi.",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/external-those-icons-flat-those-icons/48/external-MySQL-programming-and-development-those-icons-flat-those-icons.png",
        alt: "external-MySQL-programming-and-development-those-icons-flat-those-icons",
      },
    },
    {
      title: "Git VCS",
      star: 8,
      description:
        "Memiliki pemahaman yang cukup baik tentang konsep serta penggunaan perintah Git, menyelesaikan konflik pada commit, serta melakukan kolaborasi dengan tim lain pada suatu proyek. ",
      imageComponent: {
        width: "48",
        height: "48",
        src: "https://img.icons8.com/color/48/git.png",
        alt: "git",
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <section className="h-100 px-4 py-12 mb-10 md:pl-10 md:pr-2 pl-8 pr-5 mt-12">
          <h5 className="text-center text-3xl mb-16 font-medium">
            <span className="border-b-2 border-purple-500">
              Personal Skills
            </span>
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map(function (item, key) {
              return (
                <div
                  className="flex flex-col relative justify-center border-2 border-purple-500 rounded-xl py-4 px-6 md:mx-4 mx-0 mb-8 bg-gray-100 box-shadow-5"
                  key={`skill.${key}`}
                >
                  <img
                    className="absolute border-2 border-purple-500 bg-gray-100 p-1 rounded-md -left-6 -top-6 w-16 box-shadow-5"
                    width={item.imageComponent.width}
                    height={item.imageComponent.height}
                    src={item.imageComponent.src}
                    alt={item.imageComponent.alt}
                  />
                  <h5 className="text-2xl font-medium text-center">
                    {item.title}
                  </h5>
                  <Stars total={item.star} />
                  <p className="text-md text-justify">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
