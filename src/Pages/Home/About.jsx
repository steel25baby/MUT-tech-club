import React from 'react'
import aboutimage from "../../assets/Animation.jpg"
import { MdComputer } from "react-icons/md";

const Aboutus = ({ icon}) => {
    return (
         
      <div className="Aboutus">
        <div className="Aboutus-icon-wrapper">{icon}</div>
      </div>
    );
  };

const About = () => {
  return (
    <section className='about-section'>
        <div className='imageAbout'><img src={aboutimage} alt="" /></div>
        <div className='aboutDetails'>
            <h1>About us</h1>
            <div>
                <MdComputer/>
                <h3 className='detailHeader'>Free training</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!</p>
            </div>
            <div>
                <h3 className='detailHeader'>Free training</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!</p>
            </div>

            <div>
                <h3 className='detailHeader'>Free training</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!</p>
            </div>

        </div>
        <div></div>
    </section>
  )
}

export default About