import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio blanditiis quos? Expedita illo ex ab doloremque quia quisquam nesciunt libero aperiam iste minus, ea officia totam iure exercitationem dolorem.'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio blanditiis quos? Expedita illo ex ab doloremque quia quisquam nesciunt libero aperiam iste minus, ea officia totam iure exercitationem dolorem.'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Kwame Dispite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio blanditiis quos? Expedita illo ex ab doloremque quia quisquam nesciunt libero aperiam iste minus, ea officia totam iure exercitationem dolorem.'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Ana McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio blanditiis quos? Expedita illo ex ab doloremque quia quisquam nesciunt libero aperiam iste minus, ea officia totam iure exercitationem dolorem.'
  },
];

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {
          data.map(( {id, avatar, name, review} ) =>{
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })
        }
      </Swiper>

    </section>
  )
}

export default testimonials