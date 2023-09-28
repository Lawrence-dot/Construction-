import React from "react";

function Recentnews() {
  return (
    <div className="recentnews" id="news">
      <div className="recentbbdy text-white mt-20 container-d">
        <div className="recenthead">
          <div className="rcilte flex w-13">
            <span className="">
              <img className="rcicon" src="./abtph.svg" alt="abtph" />
            </span>
            <span>Whats Up</span>
          </div>

          <div className="pttnav flex">
            <div className="font-bold">
              <span className="ptcase"> Recent News </span>
            </div>

            <div className="ml-auto rclinks flex">
              <span className="recentarrow">
                <img src="./arr1.svg" alt="arr1" />
              </span>
              <span className="recentarrow">
                <img src="./arr2.svg" alt="arr2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recentnews;
