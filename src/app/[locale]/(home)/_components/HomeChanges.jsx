"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

const HomeChanges = () => {
  const t = useTranslations("home.changes");

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
          {t('title.0', {fallback: "2025 Changes"})} <br />
          {t('title.1', {fallback: "the Rules"})}
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
                {t('slides.0.title.0', {fallback: "PC Costs"})}
                <br />
                {t('slides.0.title.1', {fallback: "Soar"})}
              </h3>
              <p>
                {t('slides.0.description', {fallback: "Lead costs in PPC campaigns have risen over 40%, making them less effective for new projects. Diversifying beyond paid ads is crucial."})}
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
                {t('slides.1.title.0', {fallback: "Data for"})} <br />
                {t('slides.1.title.1', {fallback: "Engagement:"})}
              </h3>
              <p>
                {t('slides.1.description', {fallback: "Engaging users now demands detailed data analysis and targeted content. Basic tactics no longer suffice."})}
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
                {t('slides.2.title.0', {fallback: "Essential"})}
                <br />
                {t('slides.2.title.1', {fallback: "Tech"})}
              </h3>
              <p>
                {t('slides.2.description', {fallback: "AI and automation tools are now standard for efficient marketing. Without them, staying competitive is impossible."})}
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
                {t('slides.3.title.0', {fallback: "Continuous"})} <br />
                {t('slides.3.title.1', {fallback: "Learning Needed"})}
              </h3>
              <p>
                {t('slides.3.description', {fallback: "Success requires ongoing education and partnerships with experts to keep up with trends and best practices."})}
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeChanges;
