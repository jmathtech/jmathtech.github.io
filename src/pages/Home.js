import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jamil</h2>
        <div className="prompt">
          <p>A full stack web developer with a passion for learning and creating innovative things.</p>
          <a href="https://www.linkedin.com/in/jamilmatheny" target="_new">
          <LinkedInIcon /></a>
          <a href="mailto://www.github.com/jmathtech" target="_new">
          <EmailIcon /></a>
          <a href="https://www.github.com/jmathtech" target="_new">
          <GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, JavaScript, React, Material UI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ExpressJS, GraphQL, MySQL, MongoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP, Java, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;