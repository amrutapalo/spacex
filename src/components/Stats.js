import React from "react";
import "./Stats.css";

const Stats = (props) => {
  console.log(JSON.parse("{" + props.stats + "}"));
  const stats = JSON.parse("{" + props.stats + "}");
  return (
    <div className="stats-container">
      {Object.keys(stats).map(function (key, index) {
        console.log(stats[key]);
        return <div className="stats">
          <div className="stats-number">
          {stats[key][1]}
          </div>
          <div className="stats-title">
          {stats[key][0]}
          </div>
        </div>
      })}
    </div>
  );
};

export default Stats;
