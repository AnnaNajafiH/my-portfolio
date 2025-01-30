import React from 'react';
import './Achievements.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import HachFestival from '../../img/Hackfestival2024.jpg';
import MentalHealth from '../../img/MentalHealth_Hackathon.jpg';
import WBSCodingSchool from '../../img/WBSCodingSchool.jpg';
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
      explanation: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      title: 'Mental Health Hackathon',
      image: MentalHealth,
      ort: 'CityCube, Berlin, Germany',
      date: '28-29th November 2024',
      explanation: ' DGPPN Congresslorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'Coding Bootcamp',
      image: WBSCodingSchool,
      ort: 'WBS Coding School, Berlin, Germany',
      date: '10 April - 9 August 2024',
      explanation: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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

    </div>
  )
}

export default Achievements