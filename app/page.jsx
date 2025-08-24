import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
// import Projects from "@/components/Projects";
import Contact from "@/components/Contact";




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar/>
      
      <Hero/>

      <About/>

      <Experience/>

      <Skills/>

      <Education/>

      {/* <Projects/> */}

      <Contact/>

    </div>
  );
}
