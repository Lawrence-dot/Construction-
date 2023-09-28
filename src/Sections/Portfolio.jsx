import React from "react";

function Portfolio() {
  const selectpf = (nav) => {
    let pimgs = Array.from(document.getElementsByClassName("pfimg"));
    let pfarr = Array.from(document.getElementsByClassName("pfnav"));
    pfarr.forEach((each) => {
      each.classList.remove("pfactive");
      each.id === nav && each.classList.add("pfactive");
      console.log(each);
    });
    pimgs.forEach((each) => {
      if (nav !== "all") {
        each.classList.add("hidden");
        each.classList.contains(nav) && each.classList.remove("hidden");
      } else {
        each.classList.remove("hidden");
      }
    });
  };
  return (
    <div className="portfolio text-white" id="portfolio">
      <div className="portfoliobdy container-d">
        <div className="portfoliohead">
          <div className="pttilte flex w-13">
            <span className="">
              <img className="pticon" src="./abtph.svg" alt="abtph" />
            </span>
            <span>Portfolio</span>
          </div>

          <div className="pttnav flex flex-col sm:flex-row">
            <div className="font-bold">
              <span className="ptcase"> Case Solution</span>
            </div>
            <div className="ml-auto pflinks">
              <span
                onClick={() => selectpf("all")}
                className="pfactive pfnav"
                id="all"
              >
                All
              </span>
              <span
                className="pfnav"
                onClick={() => selectpf("construction")}
                id="construction"
              >
                Construction
              </span>
              <span
                className="pfnav"
                onClick={() => selectpf("garden")}
                id="garden"
              >
                {" "}
                Garden{" "}
              </span>
              <span
                className="pfnav"
                onClick={() => selectpf("housing")}
                id="housing"
              >
                {" "}
                Houses{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
