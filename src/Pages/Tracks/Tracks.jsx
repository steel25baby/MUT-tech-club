import React from 'react'
import tracks from '../../Data/tracks'
import "./Tracks.css"

const Careers = ({
  image,
  updatedDate,
  course,
  currentlearners,
  description,
}) => {
  return (
    <section className='Careers'>
      <div className='CareersImage'>
        <img src={image} alt="" />
        <p>{updatedDate}</p>
      </div>
      <div className='CareersDescription'>
        <h1>{course}</h1>
        <p>{description}</p>
        <div className='CareersLearners'>
    <p>{currentlearners}</p>
      </div>
      </div>
     
    </section>
  )
}

const Tracks = () => {
  return (
    <React.Fragment>
      <section className='Tracks'>
        <h1 className='TrackHeader'>Careers</h1>
        <div className='Mothercourse'>
          {tracks.map((currenttrack, i) => {
            return (
              <Careers
              key={i}
              image={currenttrack.image}
              updatedDate={currenttrack.updatedDate}
              course={currenttrack.course}
              currentlearners={currenttrack.currentlearners}
              description={currenttrack.description}
              />
            );
          })}
        </div>
        <div className='RegisterWrapper'>
          <h1>Register here</h1>
          <div className='studentDetails'>
          <label htmlFor="fullname">Full name</label>
          <input 
          type="text" 
          id='fullname'
          className='inputDetails'
          placeholder='Full Name'
          />
        </div>
        <div className='studentDetails'>
          <label htmlFor="email">Email Address</label>
          <input 
          type="email" 
          id='email'
          className='inputDetails'
          placeholder='Email Address'
          />
        </div>
          <div className='studentDetails'>
          <label htmlFor="fullname">Course of study</label>
          <input 
          type="text" 
          id='Course'
          className='inputDetails'
          placeholder='Your Course of study'
          />
        </div>
        <div className='studentDetails'> 
        <label htmlFor="RegNo">Registration number</label>
        <input
         type="number" 
         id='Registration'
         className='inputDetails'
         placeholder='Reg.No'
         />
        </div>
        </div>
        
      </section>
    </React.Fragment>
  )
}

export default Tracks