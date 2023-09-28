import React, { useState } from "react";
import Testimonial from "../Components/Testimonial";

function Testimonials() {
  const [testimonials] = useState([
    {
      src: "./clt1.png",
      name: "Zainab Pelumi",
      title: "Executive",
      text: "I know I am not alone because I have a house that I live in with my family. I see  the morning shine everyday and I am okay.",
    },
    {
      src: "./clt2.png",
      name: "Ray Moses",
      title: "Executive",
      text: "I know I am not alone because I have a house that I live in with my family. I see  the morning shine everyday and I am okay.",
    },
    {
      src: "./clt3.png",
      name: "Gift Love",
      title: "Executive",
      text: "I know I am not alone because I have a house that I live in with my family. I see  the morning shine everyday and I am okay.",
    },
  ]);
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonialbdy container-d text-black">
        <div className="testimonialhead">
          <div className="flex w-full sm:w-fit flex-col">
            <span className="w-8 mx-auto">
              <img src="./test.svg" alt="abtph" />
            </span>
            <span className="ctcs">Customer Say</span>
            <span className="ctct">Client Testimonials</span>
          </div>
        </div>
        <div className="testimonialcontent flex flex-col sm:flex-row">
          {testimonials.map((each, index) => {
            return (
              <Testimonial
                src={each.src}
                key={index}
                name={each.name}
                title={each.title}
                text={each.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
