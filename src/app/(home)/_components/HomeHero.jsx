"use client";
import React, { useState } from "react";
import MainButton from "@/components/MainButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeHero = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track active slide

  const slides = [
    {
      id: 1,
      image: "/images/home/hero1.png",
      text: "Each year, 1 million new brands emerge, but only 0.001% stand the test of time.",
    },
    {
      id: 2,
      image: "/images/home/hero2.png",
      text: "Meet Lyxiom: Full-cycle agency. Dynamic marketing. Building brands that win.",
    },
  ];

  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="col-01">
            <h1>
              Packing brands, <span>unpacking the future</span>
            </h1>
            <MainButton text={"Start Your Brand"} link={"#"} />
          </div>
          <div className="col-02">
            <Swiper
              spaceBetween={36}
              slidesPerView={1}
              autoplay={true}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className="inner"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <span className="number">
                      {String(slide.id).padStart(2, "0")}
                    </span>
                    <h3>{slide.text}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pagination-wrap">
              <div className="slide-num">
                {String(activeSlide).padStart(2, "0")}
              </div>
              <div className="pagination">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`pagination-bullet ${
                      activeSlide === index + 1 ? "active" : ""
                    }`}
                    onClick={() => setActiveSlide(index + 1)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-wrap">
        <video
          width="1442"
          height="346"
          autoPlay={true}
          muted
          loop
          preload="none"
        >
          <source src="/videos/ctaBack.webm" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HomeHero;
