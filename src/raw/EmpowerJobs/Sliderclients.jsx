import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, FreeMode, Mousewheel, Keyboard, Autoplay } from "swiper";
import Compsliderone from "./Compsliderone";
import Compslidertwo from "./Compslidertwo";
import Compsliderthree from "./Compsliderthree";



export default function App() {
  return (
<div className='flex justify-center w-full h-[15rem]'>    
    
<Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        direction="horizontal"
        spaceBetween={1}
        slidesPerView={5}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="w-[15rem] object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/exxonjpg-1583226366jpg-1663941848.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[10rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/sgsjpg-1583226324jpg-1663941816.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[5rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/wwfjpg-1583226295jpg-1663941787.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/philip-morrisjpg-1583227693jpg-1663941818.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[5rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/tccjpg-1583227130jpg-1663941851.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/ukaid-1jpg-1583227062jpg-1663941872.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/totaljpg-1583152459jpg-1663941939.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/beirserdorfjpg-1583226738jpg-1663942047.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/ukaidjpg-1583226657jpg-1663942018.webp" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-[15rem]  object-cover" src="https://empower-prod.s3.ap-south-1.amazonaws.com/Clients/Images/gizjpg-1583226613jpg-1663942001.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
