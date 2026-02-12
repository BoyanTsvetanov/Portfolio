import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";
import useLenisScroll from "./constants/scrollSmooth";
import IntroNew from "./sections/IntroNew";
import NoiseBackground from "./components/NoiseBackground";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useLenisScroll(menuOpen); // 👈 Lenis controlled here

  return (
    <main>
      <Header isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <IntroNew />
      <NoiseBackground />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
};

export default App;
