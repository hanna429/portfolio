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

      </div>
    </section>
  );
}

export default Avathar;
