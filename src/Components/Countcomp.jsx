import React from "react";

function Countcomp(props) {
  return (
    <div className="countcomp flex flex-col">
      <span className="countnum">{props.number}</span>
      <span className="counttxt">{props.txt}</span>
    </div>
  );
}

export default Countcomp;
