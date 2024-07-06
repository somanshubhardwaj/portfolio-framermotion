import './app.scss'
import Navbar from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/sidebar'
import Hero from './components/hero/Hero'
function App() {

  return (
    <div className="">
      <Sidebar />
      <section>
        <Navbar />
        <Hero/>
      </section>
      <section>parallax</section>
      <section>skills</section>
      <section>parallax</section>
      <section>projects</section>
      <section>project</section>
      <section>project</section>
      <section>contact</section>
    </div>
  )
}

export default App
