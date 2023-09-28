import React from "react";

function Improvebox(props) {
  return (
    <div className="impbox">
      <div className="impboxbdy flex">
        <div className="impimg">
          <img src={props.img} alt="imp" />
        </div>
        <div className="impbdy flex flex-col">
          <div className="imphead mb-5 font-bold">{props.head}</div>
          <div className="imptxt">{props.txt}</div>
        </div>
      </div>
    </div>
  );
}

export default Improvebox;
