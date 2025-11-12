import React from "react";
import "./Avathar.css"; // optional — to handle styles separately

function Avathar() {
  return (
    <section className="about-me mt-5 py-5 avatar-wrapper text-center ">
      <div className="avatar-section mt-5">
        <img
          src="/avathar.jpeg"
          alt="Hanna Fathima"
          className="avatar-img"
        />
        {/* <h2 className="avatar-name mt-3">Hanna Fathima</h2>
        <p className="avatar-role text-muted">Full-Stack Developer</p>
        <p className="avatar-email">
          <a href="fathimahanna429@gmail.com" className="email-link">
            fathimahanna429@gmail.com
          </a>
        </p> */}
      </div>
    </section>
  );
}

export default Avathar;
