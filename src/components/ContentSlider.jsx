import React from "react";
import { BsHeadphones, BsTruck, BsWindow } from "react-icons/bs";
// Import Swiper React components and style.css
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Referans1 from "../assets/elle.jpeg";
import Referans2 from "../assets/starbucks.jpeg";
import Referans3 from "../assets/victorysecret.jpeg";
import Referans4 from "../assets/avva.jpeg";
import { Autoplay, Navigation, Pagination } from "swiper";
import { GiInfinity } from "react-icons/gi";

const ContentSlider = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 gap-6">
      
        <h1 className="flex justify-center items-center text-xl md:text-3xl text-[#15284B] font-bold pb-30">Birlikte Çalıştığımız Markalar</h1>
      
      <div className="">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="referans-slide"
        >
          <SwiperSlide>
            <img src={Referans1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Referans4} />
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
};

export default ContentSlider;
