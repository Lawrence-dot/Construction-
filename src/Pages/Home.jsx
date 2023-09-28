import React from "react";
import Firstsection from "../Sections/Firstsection";
import Footer from "../Sections/Footer";
import Fourthsection from "../Sections/Fourthsection";
import Links from "../Sections/Links";
import Nextproject from "../Sections/Nextproject";
import Portfolio from "../Sections/Portfolio";
import Portfoliocontent from "../Sections/Portfoliocontent";
import Recentcontent from "../Sections/Recentcontent";
import Recentnews from "../Sections/Recentnews";
import Secondsection from "../Sections/Secondsection";
import Testimonials from "../Sections/Testimonials";
import Thirdsection from "../Sections/Thirdsection";
import "../Styles/Home.css";
import Sidenav from "./Sidenav";

function Home() {
  return (
    <div className="Home text-blue-700">
      <Sidenav />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Portfolio />
      <Portfoliocontent />
      <Testimonials />
      <Recentnews />
      <Recentcontent />
      <Nextproject />
      <Links />
      <Footer />
    </div>
  );
}

export default Home;
