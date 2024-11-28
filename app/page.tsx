import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skills from "./component/skills";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-200">
      <Hero />
      <About />
      <Skills /> 
      <Project />
      <Contact />
    </div>
  );
}
