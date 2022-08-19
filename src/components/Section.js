import React from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <section className="section" style={{ backgroundImage: `url(${props.image})` }}>
      <div className={`section-inner active`}>
        <h4>{props.subtitle}</h4>
        <h2>{props.title}</h2>
        <div className="button">{props.buttonText}</div>
      </div>
      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Section;
