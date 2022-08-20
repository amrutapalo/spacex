import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const Stats = (props) => {
  let [statValueFirst, setStatValueFirst] = useState(0);
  let [statValueSecond, setStatValueSecond] = useState(0);
  let [statValueThird, setStatValueThird] = useState(0);
  const refFirst = useRef();
  const refSecond = useRef();
  const refThird = useRef();
  const speed = 10;

  useEffect(() => {
    console.log(
      "-------",
      refFirst.current.dataset.target,
      typeof refFirst.current
    );

    // let inc = Math.round(refFirst.current.dataset.target / speed);
    const inc =
      Math.round(refFirst.current.dataset.target/speed) == 0
        ? (refFirst.current.dataset.target/1)
        : Math.round(refFirst.current.dataset.target/speed);

        console.log("LOG 1:::", inc);
    if (statValueFirst < refFirst.current.dataset.target) {
      const timeout = setTimeout(() => {
        setStatValueFirst(statValueFirst + inc);
      }, 50);

      console.log("timeout-", timeout);
      return () => {
        clearTimeout(timeout);
        console.log("clear--", timeout);
      };
    } else {
      setStatValueFirst(refFirst.current.dataset.target);
    }
  }, [statValueFirst]);

  useEffect(() => {
    console.log(
      "-------",
      refSecond.current.dataset.target,
      typeof refSecond.current
    );

    const inc =
      Math.round(refSecond.current.dataset.target/speed) == 0
        ? (refSecond.current.dataset.target/1)
        : Math.round(refSecond.current.dataset.target/speed);

    console.log("LOG 2:::", inc);

    if (statValueSecond < refSecond.current.dataset.target) {
      const timeout = setTimeout(() => {
        setStatValueSecond(statValueSecond + inc);
      }, 50);

      console.log("timeout-", timeout);
      return () => {
        clearTimeout(timeout);
        console.log("clear--", timeout);
      };
    } else {
      setStatValueSecond(refSecond.current.dataset.target);
    }
  }, [statValueSecond]);

  useEffect(() => {
    console.log(
      "-------",
      refThird.current.dataset.target,
      typeof refThird.current
    );

    const inc =
      Math.round(refThird.current.dataset.target/speed) == 0
        ? (refThird.current.dataset.target/1)
        : Math.round(refThird.current.dataset.target/speed);
    console.log("LOG 3:::", inc);

    if (statValueThird < refThird.current.dataset.target) {
      const timeout = setTimeout(() => {
        setStatValueThird(statValueThird + inc);
      }, 50);

      console.log("timeout-", timeout);
      return () => {
        clearTimeout(timeout);
        console.log("clear--", timeout);
      };
    } else {
      // const timeout = setTimeout(() => {
      //   setStatValueThird(statValueThird + 1);
      // }, 200);

      // console.log("timeout-", timeout);
      // return () => {
      //   clearTimeout(timeout);
      //   console.log("clear--", timeout);
      // };
      setStatValueThird(refThird.current.dataset.target);
    }
  }, [statValueThird]);

  // console.log(JSON.parse("{" + props.stats + "}"));
  const stats = JSON.parse("{" + props.stats + "}");
  console.log(stats["first"][1], stats["second"][1], stats["third"][1]);
  return (
    <div className="stats-container">
      {/* {Object.keys(stats).map(function (key, index) {
        console.log(stats[key][0]);

        return (
          <div className="stats" key={stats[key][0]}>
            <div className="stats-number" ref={ref} data-target={stats[key][1]}>
              {statValue}
            </div>
            <div className="stats-title">{stats[key][0]}</div>
          </div>
        );
      })} */}

      <div className="stats" key={stats["first"][0]}>
        <div
          className="stats-number"
          ref={refFirst}
          data-target={stats["first"][1]}
        >
          {statValueFirst}
        </div>
        <div className="stats-title">{stats["first"][0]}</div>
      </div>

      <div className="stats" key={stats["second"][0]}>
        <div
          className="stats-number"
          ref={refSecond}
          data-target={stats["second"][1]}
        >
          {statValueSecond}
        </div>
        <div className="stats-title">{stats["second"][0]}</div>
      </div>

      <div className="stats" key={stats["third"][0]}>
        <div
          className="stats-number"
          ref={refThird}
          data-target={stats["third"][1]}
        >
          {statValueThird}
        </div>
        <div className="stats-title">{stats["third"][0]}</div>
      </div>
    </div>
  );
};

export default Stats;
