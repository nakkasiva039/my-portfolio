import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;