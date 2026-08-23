import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";
import useLenisScroll from "./constants/scrollSmooth";
import IntroNew from "./sections/IntroNew";
import Background from "./components/Background";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useLenisScroll(menuOpen); // Lenis controlled here

  return (
    <main>
      <Header isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <IntroNew />
      <Background />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
};

export default App;
