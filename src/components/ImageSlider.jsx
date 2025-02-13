import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageSlides = [
  { id: 1, url: "https://i.ibb.co.com/ChcSb17/Talk-Pal-illustrations-of-languiage-learning-43.webp", alt: "Slide 1" },
  { id: 2, url: "https://i.ibb.co.com/bJRJZ3X/1-2-Jy-Cvaqf-CL2t-Zy-OGDCvy-Ow.jpg", alt: "Slide 2" },
  { id: 3, url: "https://i.ibb.co.com/FYfBSTK/brain-960x416.png", alt: "Slide 3" },
  { id: 4, url: "https://i.ibb.co.com/7jCrT5q/ACTFL-Banner-Final-Web.png", alt: "Slide 4" },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {imageSlides.map((slide) => (
            <div key={slide.id} className="flex justify-center items-center">
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
