import './App.css'
import Hero from './sections/Hero/Hero'
import Projects
 from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
// import Element from './sections/Element/Element'
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer'

function App() {

  return (
    <>
    <Hero/>
    <Projects/>
    <Skills/>
    {/* <Element/> */}
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
