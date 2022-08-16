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
    </section>
  );
};

export default Section;
