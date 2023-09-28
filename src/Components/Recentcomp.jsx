import React from "react";

function Recentcomp(props) {
  return (
    <div className="rcnews flex flex-col text-black">
      <div className="rcnimg">
        <img src={props.src} alt="oo" />
      </div>
      <div className="flex flex-row rcomp mt-5">
        <span>
          <img class="rcompicon" src="./abtph.svg" alt="abtph" />
        </span>
        <span>{props.date}</span>
        <span>{props.author}</span>
      </div>
      <span className="mt-3 mb-2 rcntitle">{props.text}</span>
    </div>
  );
}

export default Recentcomp;
