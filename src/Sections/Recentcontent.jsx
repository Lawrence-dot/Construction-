import React, { useState } from "react";
import Recentcomp from "../Components/Recentcomp";

function Recentcontent() {
  const [images] = useState([
    {
      type: "housing",
      src: "./p1.png",
      date: "April 2022",
      author: "By Paul",
      text: "How to Become a Successful Young Entrepreneur.",
    },
    {
      type: "housing",
      src: "./p5.png",
      date: "April 2022",
      author: "By Paul",
      text: "How to Become a Successful Young Entrepreneur.",
    },
    {
      type: "garden",
      src: "./p3.png",
      date: "April 2022",
      author: "By Paul",
      text: "How to Become a Successful Young Entrepreneur.",
    },
    {
      type: "construction",
      src: "./p1.png",
      date: "April 2022",
      author: "By Paul",
      text: "How to Become a Successful Young Entrepreneur.",
    },
  ]);
  return (
    <div className="rccontent container-d">
      <div className="flex flex-col sm:flex-row flex-wrap">
        {images.map((each, index) => {
          return (
            <Recentcomp
              src={each.src}
              className={`${each.type} pfimg`}
              date={each.date}
              type={each.type}
              author={each.author}
              text={each.text}
              alt={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recentcontent;
