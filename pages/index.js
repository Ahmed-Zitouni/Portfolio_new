import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function Landing() {
  return (
    <>
      <body class="body">
        <NavBar display={true} />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </body>
    </>
  );
}
