import React from 'react'
import aboutimage from "../../assets/Animation.jpg"
import { RiComputerLine } from "react-icons/ri";

const Aboutus = ({ icon, title, description }) => {
        return (
             
          <div className="Aboutus">
            <div className="Aboutus-icon-wrapper">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      };

const About = () => {
  return (
    <section className='About'>
        <h1>About us</h1>
       <section className='about-section'>
        <div className='imageAbout'><img src={aboutimage} alt="" /></div>
        <div className='about-section-right'>
        <Aboutus icon={<RiComputerLine/>} title="Free training" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" />
        <Aboutus icon={<RiComputerLine/>} title="Free training" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" />
        <Aboutus icon={<RiComputerLine/>} title="Free training" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" />
        </div>
        
    </section>
    </section>
   
  )
}

export default About