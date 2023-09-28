import React from "react";
import Topnav from "../Components/Topnav";

function Firstsection() {
  return (
    <div className="first" id="first">
      <div className="firstcontainer">
        <div className="flexcontent container-d">
          <Topnav />
          <div className="twoview justify-center flex flex-col md:flex-row">
            <div className="w-1/2 innovasec">
              <div className="innovasecbdy">
                <div className="fheader flex flex-col font-bold">
                  <h1>Innovation</h1>
                  <div className="constructure my-7 flex flex-row">
                    <div className="flex flex-row">
                      <span className="vct"></span>
                      <span className="constructuretxt"> Constructure</span>
                    </div>
                  </div>
                  <div className="ctxt">
                    Hey Guys, have a look at our new design about Architecture
                    Landing Page. Don't forget to check the attachment. Have a
                    look at our new design about Architecture Landing Page. Have
                    a look at our design.{" "}
                  </div>
                  <div className="innobtn">
                    <button className="text-black"> Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 workercontainer">
              <img src="./worker.png" alt="worker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstsection;
