import React from "react";

function Nextproject() {
  return (
    <div className="nextproject">
      <div className="nextprojectbdy container-d">
        <div className="nextprojectcontent flex">
          <div className="flex npctxt flex-col">
            <div className="">
              <div className="nexttxt">
                Looking For A Quality And Affordable Construction for Your{" "}
                <span className="nxtprojtxt">Next Project?</span>
              </div>
              <div className="nextquote rounded-full text-white flex">
                <span className="my-auto">
                  {" "}
                  <input
                    className="bg-transparent w-full"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                </span>
                <span className="quoteicon block ml-auto">
                  <img src="./dbright.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <img src="./next2.png" alt="nextimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nextproject;
