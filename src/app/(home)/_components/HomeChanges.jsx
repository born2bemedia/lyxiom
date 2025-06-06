"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeChanges = () => {
  return (
    <section className="home-changes">
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
          2025 Changes <br />
          the Rules
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
          className="home-changes__body"
        >
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>
                PC Costs
                <br />
                Soar
              </h3>
              <p>
                Lead costs in PPC campaigns have risen over 40%, making them
                less effective for new projects. Diversifying beyond paid ads is
                crucial.
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
              <h3>
                Data for <br />
                Engagement:
              </h3>
              <p>
                Engaging users now demands detailed data analysis and targeted
                content. Basic tactics no longer suffice.
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
              <h3>
                Essential
                <br />
                Tech
              </h3>
              <p>
                AI and automation tools are now standard for efficient
                marketing. Without them, staying competitive is impossible.
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
              <h3>
                Continuous <br />
                Learning Needed
              </h3>
              <p>
                Success requires ongoing education and partnerships with experts
                to keep up with trends and best practices.
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeChanges;
