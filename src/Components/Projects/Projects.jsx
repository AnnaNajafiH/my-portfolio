import React, {useState}from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/booklook1.png';
import profilePic2 from '../../img/easyShop1.png';
import profilePic3 from '../../img/pokemon1.png';
import profilePic4 from '../../img/onlineShop1.png';
import { Pagination } from 'swiper/modules';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';  
import 'swiper/css/pagination';
import 'swiper/css';


function Projects() {
  const [showTechPopup, setShowTechPopup] = useState(false);
  const [currentTech, setCurrentTech] = useState([]);

  const projects = [
    {
      id: 1,
      title: 'Book_look',
      image: profilePic1,
      link: 'https://booklook24-1.onrender.com', 
      technologies: ['TypeScript','React', 'Express', 'MongoDB', 'Tailwind CSS'],

    },
    {
      id: 2,
      title: 'EasyShop',
      image: profilePic2, 
      link: 'https://easyshop-y1eg.onrender.com',
      technologies: ['TypeScript','React', 'Express', 'MongoDB', 'Bootstrap', 'CSS' , 'Paypal'],

    },
    {
      id: 3,
      title: 'Pokémon',
      image: profilePic3, 
      link: 'https://wd51-pokebattle.netlify.app/', 
      technologies: ['JavaScript', 'React', 'Express', 'tailwind CSS' ],

    },
    {
      id: 4,
      title: 'OnlineShop',
      image: profilePic4, 
      link: 'https://guileless-eclair-d028ca.netlify.app/', 
      technologies: ['TypeScript', 'React', 'json-server', 'tailwind CSS' ],

    },
    
  ];

const handleTechClick = (technologies)=>{
  setCurrentTech (technologies);
  setShowTechPopup(true)
};

const closeTechPopup = ()=> {
  setShowTechPopup(false);
  setCurrentTech([])
}

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
                            <a href={project.link} className='project-link' target='_blank' rel="noopener noreferrer"><span>Go to {project.title} 🔗 </span>
                            </a>

                    {/* Icons for GitHub and Tech Info */}
                    <div className="project-icons">
                        <a href={`https://github.com/AnnaNajafiH/${project.title}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                        </a>
                        <FaInfoCircle
                        className='info-icon'
                         size={25}
                         onClick={() => handleTechClick(project.technologies)}
                        style={{ cursor: 'pointer' }}
                        />
                        </div>
                            
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
         {/* Popup for Technologies */}
      {showTechPopup && (
        <div className="tech-popup">
          <div className="popup-content">
            <h2>Technologies Used</h2>
            <ul>
              {currentTech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <button onClick={closeTechPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects;