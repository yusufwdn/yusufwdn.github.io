import React, { useState } from "react";
import NavbarMenu from "../components/Navbar/NavbarMenu";
import NavbarBrand from "../components/Navbar/NavbarBrand";

export default function Header() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-gray-800">
        <NavbarBrand />
        <NavbarMenu />
      </div>
    </header>
  );
}
