import './app.scss'
import Navbar from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/sidebar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
function App() {

  return (
    <div className="">
    

      <Sidebar />
  
      <section>
        <Navbar />
        <Hero/>
      </section>
      <section>
        <Parallax type={"skills"}/>
      </section>
      <section>skills</section>
      <section>
        <Parallax type={"portfolio"}/>
      </section>
      <section>projects</section>
      <section>project</section>
      <section>project</section>
      <section>contact</section>
    </div>
  )
}

export default App
