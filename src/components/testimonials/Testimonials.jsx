import React from 'react';
import "./testimonials.css";
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avatar1,
    name: 'Tina Snow',
    review: 'lorem jefie fjerfi ufdsn fjdfsdfn fdsmfbyhi jdsfhsh sdifuhfn frbrfb fsdifuref iuffnfnurfg freufrefb ferfydfh erfierufgb rfyurgfrb fyrefuire fuyeufbi jfwuefb'
  },
  {
    avatar: Avatar4,
    name: 'Tina Snow',
    review: 'lorem jefie fjerfi ufdsn fjdfsdfn fdsmfbyhi jdsfhsh sdifuhfn frbrfb fsdifuref iuffnfnurfg freufrefb ferfydfh erfierufgb rfyurgfrb fyrefuire fuyeufbi jfwuefb'
  },
  {
    avatar: Avatar2,
    name: 'Tina Snow',
    review: 'lorem jefie fjerfi ufdsn fjdfsdfn fdsmfbyhi jdsfhsh sdifuhfn frbrfb fsdifuref iuffnfnurfg freufrefb ferfydfh erfierufgb rfyurgfrb fyrefuire fuyeufbi jfwuefb'
  },
  {
    avatar: Avatar3,
    name: 'Tina Snow',
    review: 'lorem jefie fjerfi ufdsn fjdfsdfn fdsmfbyhi jdsfhsh sdifuhfn frbrfb fsdifuref iuffnfnurfg freufrefb ferfydfh erfierufgb rfyurgfrb fyrefuire fuyeufbi jfwuefb'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      // install Swiper modules
      modules={[ Pagination, ]}
      spaceBetween={40}
      slidesPerView={1.1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial' key={index}>
                <div className='client__avatar'>
                  <img src={ avatar } alt='' />
                </div>
                  <h5 className='client__name'>{ name }</h5>
                  <small className='client_review'>
                    { review }
                  </small>
              </SwiperSlide>
            )
            
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials