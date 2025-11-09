import React from 'react'
import { Container } from 'react-bootstrap'
import './Passionate.css'

function Passionate() {
  return (
    <section className='passion-section'>
      <Container>
        <h2 className="passion-heading text-center">
          Passionate about cutting-edge technologies
        </h2>

        <div className="marquee-container">
          <div className="marquee">
            <span>
              Django &nbsp; &nbsp; Flask &nbsp; &nbsp; REST API’s &nbsp; &nbsp; AWS &nbsp; &nbsp; 
              &nbsp; HTML/CSS &nbsp; &nbsp; JavaScript &nbsp; &nbsp; Bootstrap 
              &nbsp; &nbsp; &nbsp; ReactJS &nbsp; &nbsp; Python &nbsp; &nbsp;
              Django &nbsp; &nbsp; Flask &nbsp; &nbsp; REST API’s &nbsp; &nbsp; AWS &nbsp; &nbsp;
              &nbsp; HTML/CSS &nbsp; &nbsp; JavaScript &nbsp; &nbsp; Bootstrap 
              &nbsp; &nbsp;  &nbsp; ReactJS &nbsp; &nbsp; Python
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Passionate
