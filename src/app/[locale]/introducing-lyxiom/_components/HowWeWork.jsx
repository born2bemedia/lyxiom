"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MainButton from "@/components/MainButton";
import RequestButton from "@/components/RequestButton";

const HowWeWork = () => {
  return (
    <section className="how-work">
      <div className="marquee-container">
        <span className="marquee">
          Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom
        </span>
      </div>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How We Work
        </motion.h2>
        <Swiper
          spaceBetween={36}
          pagination={{ clickable: true }}
          breakpoints={{
            // For mobile, show only 1 slide per view
            320: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 36,
            },
          }}
          modules={[Pagination]}
          className="how-work__body"
        >
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="number">01</span>
              <h3>
                Reframing
                <br />
                Perspectives
              </h3>
              <span className="divider"></span>
              <p>
                Every challenge starts with a fresh lens. Our insights-driven
                approach uncovers new ways to understand your customers and
                redefine your brand’s opportunities.
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
            >
              <span className="number">02</span>
              <h3>
                Commercially <br />
                Driven Thinking
              </h3>
              <span className="divider"></span>
              <p>
                We refocus your brand to deliver profit, value, and lasting
                impact—because enthusiasm alone won't sustain success.
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.4}
            >
              <span className="number">03</span>
              <h3>
                Innovative
                <br />
                Experimentation
              </h3>
              <span className="divider"></span>
              <p>
                We embrace cutting-edge technologies and challenge conventional
                norms to explore what’s next for your business.
              </p>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.6}
            >
              <span className="number">04</span>
              <h3>
                Meticulous <br />
                Craftsmanship
              </h3>
              <span className="divider"></span>
              <p>
                Success requires ongoing education and partnerships with experts
                to keep up with trends and best practices.
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>

        <div className="button-wrap">
          <RequestButton text={"Let’s Start Your Brand"} />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
