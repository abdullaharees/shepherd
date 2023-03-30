import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Compsliderone from "./Compsliderone";
import Compslidertwo from "./Compslidertwo";
import Compsliderthree from "./Compsliderthree";



export default function App() {
  return (
<div className='flex justify-center w-full h-[30rem]'>    
    
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Compsliderone />
        </SwiperSlide>
        <SwiperSlide>
          <Compslidertwo />
        </SwiperSlide>
        <SwiperSlide>
          <Compsliderthree />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
