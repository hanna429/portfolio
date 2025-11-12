import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="contact-container">
        <section className="contact-section">
          <h2 className="contact-heading">
            FROM CONCEPT TO CREATION <br />
            LET'S MAKE IT HAPPEN!
          </h2>

          <a href="#contact" className="connect-button">
            Let's Connect
            <ArrowForwardIcon sx={{ fontSize: 20, marginLeft: '8px' }} />
          </a>

          <div className="availability-info">
            <p className="availability-status">
              I'm available for <strong>full-time roles & freelance projects.</strong>
            </p>
            <p className="availability-detail">
              I thrive on crafting dynamic web applications and delivering seamless user experiences.
            </p>
          </div>
        </section>
      </div>

      {/* ------------ NAV LIST SECTION ------------- */}
      <Container className="footer-nav-container">
        <Row>
          <Col md={4}>
            <h5 className="footer-logo">han.</h5>
            <p className="footer-about">
              I'm Ashmin — a full stack developer, <br />
              freelancer & problem solver. Thanks for <br />
              checking out!
            </p>
          </Col>

          <Col md={4}>
            <ul className="footer-list">
              <li className="footer-list-title">General</li>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
            </ul>
          </Col>
             <Col md={4}>
            <ul className="footer-list">
              <li className="footer-list-title">More</li>
              <li>Resume</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* -------------- COPYRIGHT SECTION -------------- */}
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
  )
}

export default Footer;
