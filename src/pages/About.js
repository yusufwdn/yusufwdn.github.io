import React, { useLayoutEffect } from "react";
import Header from "../parts/Header";

export default function About() {
  useLayoutEffect(() => {
    document
      .querySelector("input[type='checkbox']#dark-toggle")
      .addEventListener("click", function () {
        document.querySelector("html").classList.add("dark");
      });
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
