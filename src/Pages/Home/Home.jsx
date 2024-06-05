import { Link } from "react-router-dom"
import Hero from "./Hero"
import WhyUs from "./WhyUs"
import About from "./About"
import Testimonials from "./Testimonials"
import "./Home.css"
const Home = () => {
  return (
    <section className="home">
      <Hero/>
      <WhyUs/>
      <About/>
      <Testimonials/>
    </section>
  )
}

export default Home