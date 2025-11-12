import React from "react";
import "./About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Aboutt() {
  return (
    <div>
      <section className="about-me m-2">
        <p className="subtitle">KNOW ABOUT ME</p>
        <h1 className="main_heading">
          Full-Stack Developer and <br />
          <span className="sub"> a little bit of everything</span>
        </h1>
        <div className="bio">
          <p>
            I'm Hanna Fathima, a highly dedicated full-stack developer focused
            on creating engaging and robust web applications. I specialize in
            bridging the gap between intuitive user interfaces and
            high-performance server-side logic, transforming intricate problems
            into clean, scalable code.
          </p>
          <p>
            My skill set includes React, Django, and Python, and I’m constantly
            exploring new technologies to stay ahead. Beyond coding, I’m driven
            by curiosity—always learning, experimenting, and finding inspiration
            in new ideas.
          </p>
          <p>
            I work hard to build useful web solutions and make a positive impact
            by being creative and working well with others.{" "}
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <GitHubIcon sx={{ fontSize: 24 }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <LinkedInIcon sx={{ fontSize: 24 }} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <XIcon sx={{ fontSize: 24 }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <InstagramIcon sx={{ fontSize: 24 }} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Aboutt;