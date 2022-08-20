import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import sectionOne from "/Users/amrutapalo/Desktop/spacex/src/images/section-a.webp";
import sectionTwo from "/Users/amrutapalo/Desktop/spacex/src/images/section-b.webp";
import sectionThree from "/Users/amrutapalo/Desktop/spacex/src/images/section-c.webp";
import sectionFour from "/Users/amrutapalo/Desktop/spacex/src/images/section-d.webp";
import falcon9 from "/Users/amrutapalo/Desktop/spacex/src/images/falcon-9.webp";
import falconheavy from "/Users/amrutapalo/Desktop/spacex/src/images/falcon-heavy.webp";
import dragon from "/Users/amrutapalo/Desktop/spacex/src/images/dragon.webp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";

const STATS = JSON.stringify([
  {
    first: ["TOTAL LAUNCHES", 169],
    second: ["TOTAL LANDINGS", 129],
    third: ["TOTAL REFLIGHTS", 108],
  },
  {
    first: ["TOTAL LAUNCHES", 3],
    second: ["TOTAL LANDINGS", 7],
    third: ["TOTAL REFLIGHTS", 4],
  },
  {
    first: ["TOTAL LAUNCHES", 35],
    second: ["VISITS TO THE ISS", 31],
    third: ["REFLOWN MISSIONS", 14],
  },
]);

// const STATS = JSON.stringify([
//   {
//     first: ["TOTAL LAUNCHES", 169],
//     second: ["TOTAL LANDINGS", 3],
//     third: ["TOTAL REFLIGHTS", 4],
//   },
//   {
//     first: ["TOTAL LAUNCHES", 3],
//     second: ["TOTAL LANDINGS", 7],
//     third: ["TOTAL REFLIGHTS", 4],
//   },
//   {
//     first: ["TOTAL LAUNCHES", 5],
//     second: ["VISITS TO THE ISS", 1],
//     third: ["REFLOWN MISSIONS", 1],
//   },
// ]);

function App() {
  const [overflow, setOverflow] = useState("auto");
  const paramsPattern = /[^{\}]+(?=})/g;
  console.log(STATS.match(paramsPattern));
  document.body.style.overflow = overflow;
  const setStyle = (overlay) => {
    overlay ? setOverflow("hidden") : setOverflow("auto");
  };

  return (
    <div className="App">
      <Router>
        <Header overflow={setStyle}></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Section
                  title="STARLINK MISSION"
                  subtitle="RECENT LAUNCH"
                  buttonText="REWATCH"
                  image={sectionOne}
                ></Section>
                <Section
                  title="KPLO MISSION"
                  subtitle="RECENT LAUNCH"
                  buttonText="REWATCH"
                  image={sectionTwo}
                ></Section>
                <Section
                  title="STARSHIP UPDATE"
                  subtitle=""
                  buttonText="LEARN MORE"
                  image={sectionThree}
                ></Section>
                <Section
                  title="STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"
                  subtitle=""
                  buttonText="LEARN MORE"
                  image={sectionFour}
                ></Section>
              </>
            }
          ></Route>
          <Route
            exact
            path="/falcon"
            element={
              <>
                <Product
                  title="FALCON 9"
                  subtitle="FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT"
                  image={falcon9}
                  stats={STATS.match(paramsPattern)[0]}
                ></Product>
              </>
            }
          ></Route>
          <Route
            exact
            path="/falconHeavy"
            element={
              <>
                <Product
                  title="FALCON HEAVY"
                  subtitle="THE WORLD’S MOST POWERFUL ROCKET"
                  image={falconheavy}
                  stats={STATS.match(paramsPattern)[1]}
                ></Product>
              </>
            }
          ></Route>
          <Route
            exact
            path="/dragon"
            element={
              <>
                <Product
                  title="DRAGON"
                  subtitle="SENDING HUMANS AND CARGO INTO SPACE"
                  image={dragon}
                  stats={STATS.match(paramsPattern)[2]}
                ></Product>
              </>
            }
          ></Route>
          <Route
            exact
            path="/humanspaceflight"
            element={
              <>
                <Product
                  title="HUMAN SPACEFLIGHT"
                  subtitle="MAKING LIFE MULTIPLANETARY"
                  image={falcon9}
                ></Product>
              </>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
