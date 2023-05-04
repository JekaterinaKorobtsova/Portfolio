import React from "react";
import about from "../image/about.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-info">
        <img src={about} alt="desktop" />
        <p>
          Hi, my name is Jekaterina and I am an entry-level front-end developer. I am passionate
          about creating beautiful and functional websites that are user-friendly and accessible. I
          have experience working with HTML, CSS, JavaScript, React and Redux, Typescript and I am
          always eager to learn more. In my free time, I enjoy exploring new coding challenges and
          working on personal projects to hone my skills. I am a self-motivated learner who enjoys
          collaborating with others to create innovative solutions. I am excited to join a team
          where I can contribute my skills and grow as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
