import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-textbox">
      <h2>where technology meets brilliant minds</h2>
      <p>
        join us to learn, share, experiment and to become the tech bro or siz you've always wanted. <br />
        the best learning experience you will ever have.
      </p>
      <div className="hero-ctas">
        <Link to="/leaders">get access</Link>
        <Link to="/tracks">learn more</Link>
      </div>
    </div>
  </section>
  )
}

export default Hero