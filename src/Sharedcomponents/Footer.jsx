import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* -------- CONTACT SECTION -------- */}
      <div className="contact-container">
        <section className="contact-section">
          <h2 className="contact-heading">
            FROM CONCEPT TO CREATION <br />
            LET'S MAKE IT HAPPEN!
          </h2>

          <a href="#contact" className="connect-button">
            Let's Connect
            <ArrowForwardIcon sx={{ fontSize: 20, marginLeft: "8px" }} />
          </a>

          <div className="availability-info">
            <p className="availability-status">
              I'm available for{" "}
              <strong>full-time roles & freelance projects.</strong>
            </p>
            <p className="availability-detail">
              I thrive on crafting dynamic web applications and delivering
              seamless user experiences.
            </p>
          </div>
        </section>
      </div>

      {/* -------- FOOTER NAVIGATION -------- */}
      <Container className="footer-nav-container">
        <Row>
          {/* Left Column */}
          <Col md={4}>
            <h5 className="footer-logo">han.</h5>
            <p className="footer-about">
              I'm Hanna — a full stack developer, <br />
              freelancer & problem solver. Thanks for <br />
              checking out!
            </p>
          </Col>

          {/* Middle Column */}
          <Col md={4}>
            <ul className="footer-list">
              <li className="footer-list-title">General</li>
              <li>
                <a href="/" className="footer-link">Home</a>
              </li>
              <li>
                <a href="/about" className="footer-link">About</a>
              </li>
              <li>
                <a href="/work" className="footer-link">Project</a>
              </li>
            </ul>
          </Col>

          {/* Right Column */}
          <Col md={4}>
            <ul className="footer-list">

              <li>
                <a href="/more" className="footer-link">More</a>
              </li>

              {/* ✅ OPTION A: Open a PDF Resume in new tab */}
              <li>
                <a
                  href="/hanresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Resume
                </a>
              </li>

              {/* ✅ OPTION B (If you have a resume page)
              <li>
                <a href="/resume" className="footer-link">Resume</a>
              </li> 
              */}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* -------- COPYRIGHT -------- */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Hanna Fathima. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed and Developed by Hanna Fathima
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
