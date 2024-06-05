import React from 'react'
import person1 from "../../assets/Testimony1.jpeg"
import person2 from "../../assets/Testimony2.jpeg"
import person3 from "../../assets/Testimony3.jpeg"
import person4 from "../../assets/Testimony4.jpeg"
import person5 from "../../assets/Testimony5.jpeg"
import person6 from "../../assets/Testimony6.jpeg"

const TestimonyDetails =({image, info, names, job}) => {
    return(
        <section className='TestimonyDetails'>
            <div className='TestimonyDetailsImage'>
            <img className='personimage' src={image} alt="" />
            </div>
            <div className='TestimonyDetailsRight'>
            <p className='persontestimony'>{info}</p>
            <h3>{names}</h3>
            <h6>{job}</h6>
            </div>
        </section>
    )
}

const Testimonials = () => {
  return (
    <section className='Testimonials'>
        <h1>Testimonials</h1>
        <div className='motherDetails'>
            <TestimonyDetails image={person1} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Rosemary Gitonga" job="Software Engineer"/>
            <TestimonyDetails image={person1} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Consolata Gitonga" job="Software Engineer"/>
            <TestimonyDetails image={person3} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Philemon Gitonga" job="Software Engineer"/>
            <TestimonyDetails image={person4} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Timothy Adam" job="Software Engineer"/>
            <TestimonyDetails image={person5} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Hannah Gitonga" job="Software Engineer"/>
            <TestimonyDetails image={person3} info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore maiores! Provident accusantium totam nulla laudantium nisi laboriosam quisquam fuga autem neque incidunt, cum quaerat libero quibusdam beatae magni tempore!" names="Crystal Gitonga" job="Software Engineer"/>
        </div>
    </section>
  )
}

export default Testimonials