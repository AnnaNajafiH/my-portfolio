import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: profilePic1,
      link: 'https://github.com/', 
    },
    {
      id: 2,
      title: 'Project 2',
      image: profilePic2, 
      link: 'https://github.com/',
    },
    {
      id: 3,
      title: 'Project 3',
      image: profilePic3, 
      link: 'https://github.com/', 
    },
    
  ];
  return (
    <div className="t-wrapper" id='Projects'>
        <div className="t-heading">
            <span>Portfolio</span>
            <span>Swipe to See My Projects</span>
            <span>Explore the details by clicking the link.</span>
        
        <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>

        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {projects.map((project)=>{
                return (
                    <SwiperSlide key={project.id}>
                        <div className="project">
                            <img src={project.image} alt="profile" />
                            <a href="project.link" className='project-link'><span>Click here to see Project</span></a>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Projects;