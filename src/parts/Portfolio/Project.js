import React from "react";

export default function Project() {
  const projects = [
    {
      title: "BUMDES KITA",
      description:
        "Aplikasi marketplace yang menjual produk dan menyewa jasa yang terkait dengan bidang pertanian, perkebunan, dan peternakan yang dibuat untuk para petani dan pengusaha sejenisnya.",
      thumbnail: require("../../assets/images/portfolio/bumdes-kita.png"),
      skills: [
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Back-End Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "Bundapedia",
      description:
        "Aplikasi yang dibangun untuk mengedukasi ibu hamil, parenting, hingga menjual produk keperluan ibu hamil, keperluan persalinan dan kebutuhan bayi.",
      thumbnail: require("../../assets/images/portfolio/bundapedia.png"),
      skills: [
        {
          title: "PHP",
        },
        {
          title: "Laravel",
        },
        {
          title: "MySQL",
        },
        {
          title: "Web Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
    {
      title: "SIN Indonesia",
      description:
        "Aplikasi toko online berbasis mobile yang dibangun khusus untuk menjual produk milik SIN Indonesia.",
      thumbnail: require("../../assets/images/portfolio/sin-indonesia.png"),
      skills: [
        {
          title: "Lumen",
        },
        {
          title: "MySQL",
        },
        {
          title: "REST API",
        },
        {
          title: "Back-End Development",
        },
        {
          title: "API Integration",
        },
      ],
    },
  ];

  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projects.map(function (item, key) {
        return (
          <div
            className="rounded-lg overflow-hidden shadow-lg bg-white"
            key={`project.${key}`}
          >
            <img
              className="w-full"
              src={item.thumbnail}
              alt={`${item.title}.${key}`}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base text-justify">
                {item.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.skills.map(function (item, key) {
                return (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={`skill.${key}`}
                  >
                    #{item.title}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
