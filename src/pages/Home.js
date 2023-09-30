import React from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import WhatIDo from "../parts/Home/WhatIDo";

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
          <div className="flex flex-col justify-center items-center mt-44 z-10">
            <h2 className="text-4xl md:text-6xl">Yusuf Wandana</h2>
            <h3 className="mt-2 text-xl">Full-Stack Web Developer</h3>
            <div className="flex flex-wrap my-3">
              <div className="flex gap-3 pt-2 pb-4 rounded-md social-wrapper">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yusuf.wandana1@gmail.com"
                  target="blank"
                  className="p-1 bg-purple-100 rounded-full hover:bg-purple-500 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                  >
                    <path d="M 6 5 C 3.8026661 5 2 6.8026661 2 9 L 2 24 C 2 25.64497 3.3550302 27 5 27 L 10 27 L 10 17.03125 L 16 21.552734 L 22 17.03125 L 22 27 L 27 27 C 28.64497 27 30 25.64497 30 24 L 30 9 C 30 6.8026661 28.197334 5 26 5 C 25.103127 5 24.263145 5.2976622 23.591797 5.7988281 L 23.589844 5.8007812 L 16 11.517578 L 8.4121094 5.8007812 L 8.4121094 5.8027344 C 7.7382078 5.2939553 6.8953058 5 6 5 z M 6 7 C 6.4606942 7 6.876933 7.1492198 7.2070312 7.3984375 L 8 7.9960938 L 8 13.019531 L 4 10.005859 L 4 9 C 4 7.8833339 4.8833339 7 6 7 z M 26 7 C 27.116666 7 28 7.8833339 28 9 L 28 10.003906 L 24 13.017578 L 24 7.9941406 L 24.789062 7.4003906 C 25.119715 7.1535565 25.550873 7 26 7 z M 10 9.5019531 L 16 14.021484 L 22 9.5019531 L 22 14.525391 L 16 19.046875 L 10 14.525391 L 10 9.5019531 z M 4 12.507812 L 8 15.523438 L 8 25 L 5 25 C 4.4349698 25 4 24.56503 4 24 L 4 12.507812 z M 28 12.507812 L 28 24 C 28 24.56503 27.56503 25 27 25 L 24 25 L 24 15.523438 L 28 12.507812 z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/yusufwdn"
                  target="blank"
                  className="p-1 bg-purple-100 rounded-full hover:bg-purple-500 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fillRule="evenodd"
                      d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yusuf-wandana"
                  target="blank"
                  className="p-1 bg-purple-100 rounded-full hover:bg-purple-500 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                  >
                    <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button
              className="bg-purple-500 px-4 py-2 rounded-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 duration-300"
              type="button"
            >
              Download CV
            </button>
            <button
              className="bg-gray-200 p-2 mt-20 rounded-full animate-bounce"
              type="button"
            >
              <img
                className="animate-pulse"
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/double-down--v4.png"
                alt="double-down--v4"
              />
            </button>
          </div>
        </section>
        <WhatIDo />
      </div>
      <Footer />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </>
  );
}
