import React from "react";
import { FaSearch } from "react-icons/fa";

function Topnav() {
  const opennav = () => {
    document.getElementById("sidenav").classList.toggle("show");
    let each = Array.from(document.getElementsByClassName("navicon"));
    each.forEach((each) => {
      each.classList.add("show");
    });
  };

  const selectnav = (nav) => {
    let element = document.getElementById(`${nav}`);
    element.scrollIntoView({ behavior: "smooth" });
    document.getElementById("sidenav").classList.remove("show");
  };

  return (
    <div className="flex topnav">
      <div className="topicon">
        <img className="h-full" src="./logo.png" alt="logo" />
      </div>
      <div
        className="navtoggler cursor-pointer ml-auto font-bold block sm:hidden"
        onClick={opennav}
      >
        <img src="./menu.svg" alt="menu" />
      </div>
      <div className="navlinks ml-auto">
        <span onClick={() => selectnav("first")}>Home</span>
        <span onClick={() => selectnav("about")}>About</span>
        <span onClick={() => selectnav("news")}>News</span>
        <span onClick={() => selectnav("portfolio")}>Projects</span>
        <span onClick={() => selectnav("testimonials")}>Testimonials</span>
        <span>
          <FaSearch className="mt-1" />
        </span>
      </div>
    </div>
  );
}

export default Topnav;
