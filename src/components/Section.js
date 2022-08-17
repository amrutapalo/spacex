import React from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <section style={{ backgroundImage: `url(${props.image})` }}>
      <div className="section-inner">
        <h4>{props.subtitle}</h4>
        <h2>{props.title}</h2>
        <div className="button">{props.buttonText}</div>
      </div>
      <div class="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Section;
