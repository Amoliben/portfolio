import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Articles from "@/components/Articles";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <CaseStudies />
      <Stats />
      <Process />
      <Articles />
      <Certificates />
      <Experience />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
