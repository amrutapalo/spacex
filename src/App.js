import "./App.css";
import Section from "./components/Section";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import sectionOne from "/Users/amrutapalo/Desktop/spacex/src/images/section-a.webp";
import sectionTwo from "/Users/amrutapalo/Desktop/spacex/src/images/section-b.webp";
import sectionThree from "/Users/amrutapalo/Desktop/spacex/src/images/section-c.webp";
import sectionFour from "/Users/amrutapalo/Desktop/spacex/src/images/section-d.webp";

function App() {
  return (
    <div className="App">
      <Header></Header>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
