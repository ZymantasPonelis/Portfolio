import React from "react";
import Scroll from "react-scroll";
import "./About.css";
const Element = Scroll.Element;

const About = () => {
  return (
    <Element name="about">
      <section id="about" className="about">
        <h2 className="section-heading">{"< About />"}</h2>
        <div className="about-content">
          <div className="text">
            <p>
              I am a passionate ReactJS developer from Kaunas, Lithuania. I have
              experience in building frontend apps using reactJs, redux and
              react-router. I also develop RESTful APIs in NodeJs using express
              library
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
