import React from "react";

function Testimonial(props) {
  return (
    <div className="ctestimonial">
      <div className="ctestcontent">
        <div className="flex flex-row">
          <div className="ctimg">
            <img src={props.src} alt="aa" />
          </div>
          <div className="cttitle mt-5 ml-4 flex flex-col">
            <span className="font-bold ctname">{props.name}</span>
            <span className="ctpost">{props.title}</span>
            <div className="flex stardiv">
              <img src="./star.svg" alt="kk" />
              <img src="./star.svg" alt="kk" />
              <img src="./star.svg" alt="kk" />
              <img src="./star.svg" alt="kk" />
              <img src="./nostar.svg" alt="kk" />
            </div>
          </div>
        </div>
        <div className="cttxt mt-4 font-light">
          {" "}
          <span>{props.text}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
