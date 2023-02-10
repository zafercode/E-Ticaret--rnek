import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://magaza.procollec.com/cdn/4/629451/cG96WmFuTXorNjQ5Tml4dUg4OG5iYmdQYmNFPQ/images/manset/nvidia-609779.webp",
      title: "Ekran Kartı",
    },
    {
      url: "https://magaza.procollec.com/cdn/4/629451/cG96WmFuTXorNjQ5Tml4dUg4OG5iYmdQYmNFPQ/images/manset/-959699.webp",
      title: "İndirimler",
    },
    {
      url: "https://magaza.procollec.com/cdn/4/629451/cG96WmFuTXorNjQ5Tml4dUg4OG5iYmdQYmNFPQ/images/manset/-162778.webp",
      title: "Laptop",
    },
    {
      url: "https://magaza.procollec.com/cdn/4/629451/cG96WmFuTXorNjQ5Tml4dUg4OG5iYmdQYmNFPQ/images/manset/aruba-744946.webp",
      title: "SwitchSeries",
    },
    {
      url: "https://magaza.procollec.com/cdn/4/629451/cG96WmFuTXorNjQ5Tml4dUg4OG5iYmdQYmNFPQ/images/manset/hp-elite-dragonfly-504871.webp",
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
    <div className="max-w-[1440px] h-[570px] w-full mx-auto py-16 px-4 mt-6 group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
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