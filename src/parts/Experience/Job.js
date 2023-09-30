import React from "react";

export default function Job() {
  const jobs = [
    {
      company_name: "PT. WAN Teknologi Internasional",
      company_logo: require("../../assets/images/company/wan-logo.png"),
      job_title: "Web Developer",
      job_range: "Sep 2021 - Now",
      job_descriptions: [
        "Analyze the client's desired application system flow.",
        "Design, develop, test, and maintain web application systems",
        "Develop API services for web and mobile application developer needs on projects.",
        "Integrate applications with third-party services like payment gateway, PPOB system, SMS gateway, shipment service, etc.",
        "Collaborate with other teams on projects to achieve project target.",
        "Ensuring the codes is readable and easy to maintain.",
      ],
    },
    {
      company_name: "PT. Madani Intelsysdata",
      company_logo: require("../../assets/images/company/intelsysdata-logo.png"),
      job_title: "ETL Developer",
      job_range: "Sep 2020 - Agu 2021",
      job_descriptions: [
        "Develop reporting application for monthly financial report in a bank.",
        "Maintenance existing application (add new features and bug fixing).",
        "Become a consultant to assist finance companies in working on monthly financial reports.",
      ],
    },
  ];
  return (
    <div className="mx-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {jobs.map(function (item, key) {
        return (
          <div
            class="bg-white h-full w-100 rounded-lg mx-5 mb-16 border-2 border-purple-500 box-shadow-5"
            key={key}
          >
            <div class="flex justify-center items-center leading-none">
              <img
                src={item.company_logo}
                alt="pic"
                class="h-40 w-100 rounded-md mt-6 mb-2"
              />
            </div>
            <div class="flex flex-col relative justify-center items-center p-3 px-5">
              <h5 class="block text-xl font-semibold">{item.company_name}</h5>
              <span className="text-lg font-medium">{item.job_title}</span>
              <span className="text-small font-small">{item.job_range}</span>
              <ul className="list-disc ml-7 mr-4 mt-5">
                {item.job_descriptions.map(function (item, key) {
                  return <li key={`jd.${key}`}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
