import React from 'react';
import './Achievements.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import HachFestival from '../../img/Hackfestival2024.jpg';
import MentalHealth from '../../img/MentalHealth_Hackathon.jpg';
import WBSCodingSchool from '../../img/certificate_Nahid_Najafi_Hajiwar.jpg';
import {useState,  useContext } from 'react';
import { themeContext } from '../../Context/Context';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Achievements() {

  const achivements = [
    {
      id: 1,
      title: 'Hackfestival 2024',
      image: HachFestival,
      ort: 'Rosengarten, Mannheim, Germany',
      date: '6-8th September 2024',
      explanation: 'Collaborated in a team of four to develop a prototype gamified app aimed at reducing workplace CO2 emissions, enabling employees to track and lower their individual carbon footprint through personalized challenges',
    },
    {
      id: 2,
      title: 'Mental Health Hackathon',
      image: MentalHealth,
      ort: 'CityCube, Berlin, Germany',
      date: '28-29th November 2024',
      explanation: ' Collaborated in a team of five to develop a prototype app aimed at increasing the acceptance of digital solutions in mental health care by addressing language barriers.',
    },
    {
      id: 3,
      title: 'Coding Bootcamp',
      image: WBSCodingSchool,
      ort: 'WBS Coding School, Berlin, Germany',
      date: '10 April - 9 August 2024',
      explanation: 'What i achieved in WBS Coding School: Developed responsive frontend systems and web applications using HTML5, CSS3, Tailwind, JavaScript React.js. Built backend systems with Node.js and Express.js, integrating secure JWT authentication. Managed databases with MongoDB and SQL. Utilized Git, GitHub for efficient development workflows. Developed RESTful APIs for seamless interaction between the frontend and backend. integrated websites using CMS platforms such as Contentful. Designed wireframes and prototypes using Figma and Excalidraw ensuring visually appealing and user-friendly interfaces',
    },
  ]

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showInfo, setShowInfo] = useState(null);

  const handleMoreInfo = (id) => {
    setShowInfo(showInfo===id? null : id);
  }




  return (
    <div className='achivement' id='Achievements'>

        {/* heading */}
        <span style={{color:darkMode?'white': ''}}>Achievements and </span>
        <span>Certificates</span>


        {/* slider */}
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="achivement-slider"
        >
          {achivements.map((achivement)=>{
            return(
              <SwiperSlide key={achivement.id}>
              <div className='swiper-elements'>
                  <img src={achivement.image} alt={achivement.title} />
                <h3>{achivement.title}</h3>
                <button className="button a-button" onClick={()=>handleMoreInfo(achivement.id)}>More Info</button>
                {showInfo === achivement.id && (
                <div className='showInfo'>
                  <h3>{achivement.ort}</h3>
                  <p>{achivement.date}</p>
                  <p>{achivement.explanation}</p>
                </div>
              )}
            </div>

            </SwiperSlide>
            )
          }
          )}
        </Swiper>
        <div className="blur a-blur1" style={{background:'var(--purple)'}}></div>
        <div className="blur a-blur2" style={{background:'skyblue'}}></div>

    </div>
  )
}

export default Achievements