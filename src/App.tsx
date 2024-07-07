import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="">
      <Sidebar />

      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type={"skills"} />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />
     
    </div>
  );
}

export default App;
