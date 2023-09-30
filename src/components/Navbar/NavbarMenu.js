import React, { useState } from "react";
import { Link } from "react-router-dom";

// import sunIcon from "../../assets/icons/sun.ico";
// import moonIcon from "../../assets/icons/moon-yellow.ico";

export default function NavbarMenu() {
  // const [darkTheme, setDarkTheme] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menu = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Kemampuan",
      to: "/skills",
    },
    {
      title: "Pengalaman",
      to: "/experience",
    },
    {
      title: "Portofolio",
      to: "/portofolio",
    },
    // {
    //   title: "Contact",
    //   to: "/contact",
    // },
  ];

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  // function changeTheme() {
  //   if (darkTheme) {
  //     document.querySelector("html").classList.remove("dark");
  //   } else {
  //     document.querySelector("html").classList.add("dark");
  //   }

  //   setDarkTheme(!darkTheme);
  // }

  return (
    <>
      <div
        className="h-6 w-6 cursor-pointer md:hidden block"
        id="menu-button"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div
        className={`w-full ${
          showMenu ? "" : "hidden"
        } md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul
          className={`pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 w-100`}
        >
          {menu?.map?.((item, index) => {
            return (
              <li key={index} className="w-100">
                <Link
                  to={item?.to}
                  className={`md:p-5 py-2 block text-white hover:text-purple-300`}
                >
                  {item?.title}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <label
              htmlFor="dark-theme-toggle"
              className="flex items-center cursor-pointer md:p-5 py-2"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  name="dark-mode"
                  id="dark-theme-toggle"
                  className="checkbox hidden"
                  onClick={changeTheme}
                />
                <div className="block border-[2px] w-11 h-6 rounded-full border-white"></div>
                <div className="dot absolute left-1 top-1 w-4 h-4 rounded-full transition">
                  <img
                    src={!darkTheme ? sunIcon : moonIcon}
                    width={25}
                    alt="theme-icon"
                  />
                </div>
              </div>
            </label>
          </li> */}
        </ul>
      </div>
    </>
  );
}
