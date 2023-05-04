import React from "react";
import photo from "../image/photo.JPG";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiSass,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="container">
      <div className="main-info">
        <div className="text">
          <h1>Hi, I am Jekaterina!</h1>
          <h2>Front-End Developer</h2>
          <p>
            Hello and welcome to my portfolio! My name is Jekaterina Korobtsova and I'm a Front End
            developer based in Tallinn, Estonia.
          </p>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/jekaterina-korobtsova-128abb21a/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="icon" />
            </a>
            <a href="https://github.com/JekaterinaKorobtsova" target="_blank" rel="noreferrer">
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="circle-image-container">
          <img src={photo} alt="" />
        </div>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-icons">
          <SiHtml5 className="html" />
          <SiCss3 className="css" />
          <SiJavascript className="js" />
          <SiReact className="react" />
          <SiRedux className="redux" />
          <SiTypescript className="ts" />
          <SiSass className="sass" />
        </div>
      </div>
    </div>
  );
};

export default Home;
