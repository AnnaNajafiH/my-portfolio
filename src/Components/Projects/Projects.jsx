import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/booklook1.png';
import profilePic2 from '../../img/easyShop1.png';
import profilePic3 from '../../img/profile3.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';


function Projects() {
  const projects = [
    {
      id: 1,
      title: 'BookLook',
      image: profilePic1,
      link: 'https://booklook24-1.onrender.com', 
    },
    {
      id: 2,
      title: 'EasyShop',
      image: profilePic2, 
      link: 'https://easyshop-y1eg.onrender.com',
    },
    {
      id: 3,
      title: 'Project 3',
      image: profilePic3, 
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
            <span>Swipe</span>
            <span> to See My Projects</span>
            <span>Explore the details by clicking the link.</span>
        
        <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>

    
          {/* slider */}
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        >
            {projects.map((project)=>{
                return (
                    <SwiperSlide key={project.id}>
                        <div className="project">
                            <img src={project.image} alt={project.title} />
                            <a href={project.link} className='project-link' target='_blank' rel="noopener noreferrer"><span>Go to {project.title} 🔗 </span></a>
                            
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Projects;