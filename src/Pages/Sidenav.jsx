import React from "react";
import { FaMinus } from "react-icons/fa";

function Sidenav() {
  const closenav = () => {
    document.getElementById("sidenav").classList.toggle("show");
  };

  const selectnav = (nav) => {
    let element = document.getElementById(`${nav}`);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={` sidenav`} id="sidenav">
      <div className="sidenavbdy text-black mx-7 mt-10">
        <div className="closemenu flex mb-3 justify-right">
          <FaMinus onClick={closenav} className="ml-auto cursor-pointer" />
        </div>
        <div className="flex flex-col" id="navlinks">
          <span onClick={() => selectnav("first")}>Home</span>
          <span onClick={() => selectnav("about")}>About Us</span>
          <span onClick={() => selectnav("news")}>News</span>
          <span onClick={() => selectnav("portfolio")}>Our Projects</span>
          <span onClick={() => selectnav("testimonials")}>
            Client Testimonials
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
