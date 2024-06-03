import { PiStudentBold } from "react-icons/pi";
import React from 'react'
const Why = ({ icon, title, description }) => {
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
        <Why  icon={<PiStudentBold />} title="mission" description="to promote a tech based culture through out campus. to all tech students and others intersted in tech"/>
        <Why icon={<PiStudentBold />} title="objectives" description="to make it a simpler for you,to make it seem more real to make your dreams come true "/>
        <Why  icon={<PiStudentBold />} title="values" description="the realm of technology discipline consisitency learning and colaboration"/>
<why/>
    </section>
  )
}

export default WhyUs