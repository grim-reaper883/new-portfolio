import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ReactLenis } from 'lenis/react'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => (
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%', 
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration:1 ,
        ease: 'power2.out'
      })
    ));
  });

  return (
    <>
    <ReactLenis root />
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
