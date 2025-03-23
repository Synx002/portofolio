// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
