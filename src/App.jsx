import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";
import Intro from "./sections/Intro";
import useLenisScroll from "./constants/scrollSmooth";

const App = () => {
  useLenisScroll();
  return (
    <main>
      {/* <Intro/> */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
};

export default App;
