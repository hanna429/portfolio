import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";
import { projectData } from "./Data";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Project() {
  return (
    <section className="project-section text-center mt-5 pt-5">
      <p className="project-label">PROJECT</p>

      <h2 className="passion-heading">
        Curated <span>Work</span>
      </h2>

      <Container className="mt-5">
        {projectData.map((item, index) => (
          <Row
            key={index}
            className="align-items-center justify-content-center mb-5 pb-5"
          >
            {/* LEFT — IMAGE */}
            <Col lg={6} className="text-center">
            <div className="bb">
              <div className="imgg">
                   <img
                src={item.imageUrl}
                className="project-image"
                alt={item.title}
              />
              </div>
            </div>
             
            </Col>

            {/* RIGHT — TEXT */}
            <Col lg={6} className=" text-start">
              <h1 className="passion-heading project-heading mb-4 mt-4">{item.title}</h1>
              <p className="project-desc">{item.subtitle}</p>

               <ul className="feature-list">
                {item.features.map((feature, i) => (
                  <li key={i}>
                    <KeyboardArrowRightIcon className="arrow-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Project;
