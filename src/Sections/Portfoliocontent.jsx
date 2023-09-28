import React, { useState } from "react";

function Portfoliocontent() {
  const [images] = useState([
    { type: "housing", src: "./p1.png" },
    { type: "housing", src: "./p5.png" },
    { type: "garden", src: "./p3.png" },
    { type: "construction", src: "./p1.png" },
    { type: "construction", src: "./p4.png" },
    { type: "garden", src: "./p5.png" },
  ]);
  return (
    <div className="pfcontent container-d">
      <div className="pfimages flex flex-col sm:flex-row flex-wrap">
        {images.map((each, index) => {
          return (
            <img
              src={each.src}
              className={`${each.type} pfimg`}
              alt={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfoliocontent;
