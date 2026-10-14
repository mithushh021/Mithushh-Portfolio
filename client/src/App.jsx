import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";

const SECTION_IDS = ["home", "about", "experience", "projects", "contact"];

export default function App() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      <div className="background"></div>
      <Sidebar />
      <main>
        <Navbar activeId={activeId} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
