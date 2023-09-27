import React, { useState } from "react";
import NavbarMenu from "../components/Navbar/NavbarMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-gray-800">
        <div className="brand">
          <span className="header-name dark:text-white md:p-5">
            Yusuf Wandana
          </span>
        </div>

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
        ></div>

        <NavbarMenu showMenu={showMenu} />
      </div>
    </header>
  );
}
