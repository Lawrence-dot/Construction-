import React from "react";
import { FaMinus } from "react-icons/fa";

function Sidenav() {
  const closenav = () => {
    document.getElementById("sidenav").classList.toggle("show");
    let each = Array.from(document.getElementsByClassName("navicon"));
    each.forEach((each) => {
      each.classList.remove("show");
    });
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
          <span className="navicon" onClick={() => selectnav("first")}>
            Home
          </span>
          <span className="navicon" onClick={() => selectnav("about")}>
            About Us
          </span>
          <span className="navicon" onClick={() => selectnav("news")}>
            News
          </span>
          <span className="navicon" onClick={() => selectnav("portfolio")}>
            Our Projects
          </span>
          <span className="navicon" onClick={() => selectnav("testimonials")}>
            Client Testimonials
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
