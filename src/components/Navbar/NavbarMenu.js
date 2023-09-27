import React, { useState } from "react";
import { Link } from "react-router-dom";

import sunIcon from "../../assets/icons/sun.ico";
import moonIcon from "../../assets/icons/moon.ico";

export default function NavbarMenu({ showMenu }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const menu = [
    {
      title: "About",
      to: "/",
    },
    {
      title: "Experience",
      to: "/",
    },
    {
      title: "Portofolio",
      to: "/",
    },
    {
      title: "Contact",
      to: "/",
    },
  ];

  function changeTheme() {
    if (darkTheme) {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }

    setDarkTheme(!darkTheme);
  }

  return (
    <ul
      className={`pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 w-100 ${
        showMenu ? "" : "hidden"
      }`}
    >
      {menu?.map?.((item, index) => {
        return (
          <li key={index} className="w-100">
            <Link
              to={item?.to}
              className={`md:p-5 py-2 block dark:text-white hover:text-purple-500`}
            >
              {item?.title}
            </Link>
          </li>
        );
      })}
      <li>
        <label
          htmlFor="dark-toggle"
          className="flex items-center cursor-pointer md:p-5 py-2"
        >
          <div className="relative">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="checkbox hidden"
              onClick={changeTheme}
            />
            <div className="block border-[2px] border-gray-900 dark:border-white w-11 h-6 rounded-full"></div>
            <div className="dot absolute left-1 top-1 w-4 h-4 rounded-full transition">
              <img
                src={darkTheme ? sunIcon : moonIcon}
                width={25}
                alt="theme-icon"
              />
            </div>
          </div>
        </label>
      </li>
    </ul>
  );
}
