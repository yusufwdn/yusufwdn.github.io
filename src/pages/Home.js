import React from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Header from "../parts/Header";

export default function Home() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#fff" },
      line_linked: {
        color: "#fff",
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 600 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 600 },
      opacity: {
        anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
        random: {
          enable: true,
          minimumValue: 0.3,
        },
        value: 0.6,
      },
      shape: {
        type: "star",
      },
      size: {
        anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
        random: false,
        value: 1,
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <section className="flex justify-center h-screen bg-black text-white">
          <div className="flex flex-col justify-center items-center z-10">
            <h2 className="text-4xl md:text-6xl text-dark dark:text-white">
              Yusuf Wandana
            </h2>
            <h3 className="mt-2 mb-5 text-xl dark:text-white">
              Full-Stack Web Developer
            </h3>
            <div className="">
              <button
                className="bg-purple-500 px-4 py-2 rounded-lg text-white"
                type="button"
              >
                Download CV
              </button>
            </div>
          </div>
        </section>
        <section class="h-screen px-4">
          <h5 className="text-center text-3xl mb-12 mt-36">What I Do?</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-4 px-6 bg-gray-100">
              <img
                src={require("../assets/icons/analyze.png")}
                className="w-8"
                alt="img"
              />
              <h5 className="text-lg my-3">Analyze</h5>
              <p className="text-sm text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                blanditiis eius saepe dolore dolor eum at accusantium. Sapiente,
                fugiat optio, deleniti iste officiis asperiores perspiciatis at
                maxime vel, porro neque.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-4 px-6 bg-gray-100">
              <img
                src={require("../assets/icons/web-development.png")}
                className="w-8"
                alt="img"
              />
              <h5 className="text-lg my-3">Development</h5>
              <p className="text-sm text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                blanditiis eius saepe dolore dolor eum at accusantium. Sapiente,
                fugiat optio, deleniti iste officiis asperiores perspiciatis at
                maxime vel, porro neque.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-4 px-6 bg-gray-100">
              <img
                src={require("../assets/icons/web-api.png")}
                className="w-8"
                alt="img"
              />
              <h5 className="text-lg my-3">Build API Services</h5>
              <p className="text-sm text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                blanditiis eius saepe dolore dolor eum at accusantium. Sapiente,
                fugiat optio, deleniti iste officiis asperiores perspiciatis at
                maxime vel, porro neque.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl py-4 px-6 bg-gray-100">
              <img
                src={require("../assets/icons/collaborate-with-teams.png")}
                className="w-8"
                alt="img"
              />
              <h5 className="text-lg my-3">Collaborate With Teams</h5>
              <p className="text-sm text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                blanditiis eius saepe dolore dolor eum at accusantium. Sapiente,
                fugiat optio, deleniti iste officiis asperiores perspiciatis at
                maxime vel, porro neque.
              </p>
            </div>
          </div>
        </section>
        {/* <section className="flex flex-col h-screen pt-20 dark:bg-black z-10">
          <h5 className="text-center text-3xl my-12 dark:text-white">
            What I Do?
          </h5>
          <div className="grid grid-rows-4 grid-flow-col gap-3">
            <div className="row-auto md:row-span-4 h-52 w-auto m-2 border-2 border-purple-400 shadow-lg shadow-purple-600/50">
              <div className="grid grid-cols-4 gap-4">
                <div className="p-3">
                  <img
                    src={require("../assets/icons/analyze.png")}
                    className="w-8"
                    alt="img"
                  />
                </div>
                <div className="col-span-3">
                  <p className="dark:text-white">lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="row-auto md:row-span-4 h-52 w-auto m-2 border-2 border-purple-400 shadow-lg shadow-purple-600/50">
              <div className="flex flex-row">
                <img src="" alt="img" />
              </div>
            </div>
            <div className="row-auto md:row-span-4 h-52 w-auto m-2 border-2 border-purple-400 shadow-lg shadow-purple-600/50">
              <div className="flex flex-row">
                <img src="" alt="img" />
              </div>
            </div>
            <div className="row-auto md:row-span-4 h-52 w-auto m-2 border-2 border-purple-400 shadow-lg shadow-purple-600/50">
              <div className="flex flex-row">
                <img src="" alt="img" />
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </>
  );
}
