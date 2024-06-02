// import { Link } from "react-router-dom"
import Hero from "./Hero"
import WhyUs from "./WhyUs"
// import Testimonials from "./Testimonials"
import "./Home.css"
const Home = () => {
  return (
    <section className="home">
      <Hero/>
      <WhyUs/>

    </section>
  )
}

export default Home