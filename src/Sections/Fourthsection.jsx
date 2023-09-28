import React, { useState } from "react";
import Teammember from "../Components/Teammember";

function Fourthsection() {
  const [Teammembers] = useState([
    { name: "Jack Mane", title: "Founder and Thinker", img: "./t1.png" },
    { name: "Richard Graham", title: "Ceo and Head of Idea", img: "./t2.png" },
    { name: "Sadiq Habeeb", title: "Product Designer", img: "./t3.png" },
  ]);
  return (
    <div className="fourthsec">
      <div className="fourthsecbdy container-d">
        <div className="fourthsechead flex justify-center flex-col">
          <span className="w-8 mr-2">
            <img src="./abtph.svg" alt="abtph" />
          </span>
          <span className="fourthsechtxt">Our Team</span>
        </div>
        <div className="forthmeet">
          <h2> Meet With Phlox Team Members</h2>
          <div className="tmembers flex flex-col sm:flex-row">
            {Teammembers.map((each, index) => {
              return (
                <div className="tmmcontainer" key={index}>
                  <Teammember
                    src={each.img}
                    title={each.title}
                    name={each.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourthsection;
