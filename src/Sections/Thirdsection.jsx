import React from "react";
import Improvebox from "../Components/Improvebox";

function Thirdsection() {
  return (
    <div className="thirdsection">
      <div className="thirdsecbdy flex container-d">
        <div className="thirdsecheader">
          <span> Improve Your Experience With Us</span>
        </div>

        <div className="impsection flex flex-wrap flex-row">
          <div className="impcontainer">
            <Improvebox
              img="./1.svg"
              head="Our Mission"
              txt="In a professional context, it often happens that private or corporate clients corder a publication."
            />
          </div>
          <div className="impcontainer">
            <Improvebox
              img="./2.svg"
              head="Our Vision"
              txt="In a professional context, it often happens that private or corporate clients corder a publication."
            />
          </div>

          <div className="impcontainer">
            <Improvebox
              img="./3.svg"
              head="Our Mission"
              txt="In a professional context, it often happens that private or corporate clients corder a publication."
            />
          </div>

          <div className="impcontainer">
            <Improvebox
              img="./4.svg"
              head="Our Vision"
              txt="In a professional context, it often happens that private or corporate clients corder a publication."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdsection;
