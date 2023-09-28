import React from "react";

function Teammember(props) {
  return (
    <div className="teammember flex flex-col">
      <div className="tmimg">
        <img src={props.src} alt="oo" />
      </div>
      <span className="mt-5 tmtitle">{props.title}</span>
      <span className="mt-3 mb-2 tmname font-bold">{props.name}</span>
      <div className="tmicons mt-3 flex flex-row">
        <span className="tmphvct"></span>
        <span className="ml-10">
          <img src="./twitter.png" alt="twitter" />
        </span>
        <span>
          <img src="./Facebook.png" alt="facebook" />
        </span>
        <span>
          <img src="./Google.png" alt="pinterest" />
        </span>
        <span>
          <img src="./Pinterest.png" alt={props.name} />
        </span>
      </div>
    </div>
  );
}

export default Teammember;
