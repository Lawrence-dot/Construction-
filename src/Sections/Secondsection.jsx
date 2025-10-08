import React from "react";
import Countcomp from "../Components/Countcomp";

function Secondsection() {
  return (
    <div className="secondsection" id="about">
      <div className="secondsecbdy container-d">
        <div className="flex flex-col sm:flex-row">
          <div className="secondfct flex flex-col sm:flex-row">
            <img className="foverimg" src="./secc.png" alt="ss" />
            <img className="secoverimg hidden lg:block" src="./secondimg.png" alt="ss" />
          </div>
          <div className="secondsct">
            <div className="abtph text-black">
              <div className="abtphhead flex">
                <span className="w-8 mr-2">
                  <img src="./abtph.svg" alt="abtph" />
                </span>
                <span>About Pholox group</span>
              </div>

              <div className="abtphbdy">
                <span className="abtwea">
                  {" "}
                  We Are The Leader In Construction{" "}
                </span>

                <span className="phstxt">
                  In a professional context, it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready.In a
                  professional context, it often happens that private or
                  corporate clients corder publication.
                </span>

                <div className="flex ml-7 flex-row my-10">
                  <span className="abtphvct"></span>
                  <span className="abtphtxt">
                    {" "}
                    In a professional context, it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready. In
                    a professional context, it often happens that private or
                    corporate clients corder a publication to be made.
                  </span>
                </div>

                <div className="phlearn"></div>

                <div className="phcounter flex justify-between hidden sm:flex">
                  <Countcomp number={"20K"} txt="Project done" />
                  <Countcomp number={"53K"} txt="Layout done" />
                  <Countcomp number={"120K"} txt="Get award" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondsection;
