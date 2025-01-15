import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonial() {
    const clients= [
        {img:profilePic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque."
        },
        {img:profilePic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque."
        },
        {img:profilePic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque."
        },
        {img:profilePic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque."
        },
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>Exceptional Work</span>
            <span>from me ...</span>
        
        <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>

        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {clients.map((client, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="profile" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial