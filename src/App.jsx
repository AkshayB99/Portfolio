import Image from "./assets/BgImage.jpeg";
import "./Style.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <section className="flex flex-col bg-fixed bg-cover bg-[#000]">
        <Header />
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contacts */}
        <Contact />
      </section>
    </>
  );
}

export default App;
