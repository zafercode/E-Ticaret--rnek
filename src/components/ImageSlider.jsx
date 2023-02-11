import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://www.ticimax.com/Uploads/Slider/ticimax-kargo-entegrasyonlari-v5.jpg",
      title: "Ekran Kartı",
    },
    {
      url: "https://www.ticimax.com/Uploads/Slider/ticimax_anasayfa-banner_depomodulu_v1.png",
      title: "İndirimler",
    },
    {
      url: "https://www.ticimax.com/Uploads/Slider/sayfatasarim-sihirbazi-anasayfav2.jpg",
      title: "Laptop",
    },
    {
      url: "https://www.ticimax.com/Uploads/Slider/ticimax_deprem_anasayfabanner_v3.png",
      title: "SwitchSeries",
    },
    {
      url: "https://www.ticimax.com/Uploads/Slider/ticimax_iso-sertifika_v7-anasayfabanner-924.jpg",
      title: "DragonFly",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[570px] w-full pb-20 group">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
        
      ></div>

      {/* Left Arrow  */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow  */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;