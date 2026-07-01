import { useEffect } from "react";
import AOS from "aos";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Logos from "./components/Logos";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Hero />
      <Introduction />
      <Skills />
      <Logos />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
