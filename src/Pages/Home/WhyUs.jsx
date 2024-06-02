import { PiStudentBold } from "react-icons/pi";
import React from 'react'
const Why = ({ icon, title, description, }) => {
    return (
         
      <div className="Why">
        <div className="why-icon-wrapper">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
const WhyUs = () => {
  return (
    <section className='why-us-section'>
        <Why  icon={<PiStudentBold />} title="mission" description="to promote a tech based culture through out campus"/>
        <Why icon={<PiStudentBold />} title="mission" description="to promote a tech based culture through out campus"/>
        <Why  icon={<PiStudentBold />} title="mission" description="to promote a tech based culture through out campus"/>
<why/>
    </section>
  )
}

export default WhyUs