import React from "react";
import NavbarMenu from "../components/Navbar/NavbarMenu";
import NavbarBrand from "../components/Navbar/NavbarBrand";

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-gray-700">
        <NavbarBrand />
        <NavbarMenu />
      </div>
    </header>
  );
}
