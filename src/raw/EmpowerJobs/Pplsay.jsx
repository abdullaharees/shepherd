import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Pagination } from "swiper";
import Compsliderone from "./Compsliderone";
import Compslidertwo from "./Compslidertwo";
import Compsliderthree from "./Compsliderthree";
import Pplsay1 from "./Pplsay1";

export default function Pplsay() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Pplsay1 />
        </SwiperSlide>
        <SwiperSlide>
          <Compslidertwo />
        </SwiperSlide>
        <SwiperSlide>
          <Compsliderthree />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
