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
import { useTranslations } from "next-intl";

const HowWeWork = () => {
  const t = useTranslations("introducing.howWeWork");

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
          {t('title', {fallback: "How We Work"})}
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
                {t('cards.0.title.0', {fallback: "Reframing"})}
                <br />
                {t('cards.0.title.1', {fallback: "Perspectives"})}
              </h3>
              <span className="divider"></span>
              <p>
                {t('cards.0.description', {fallback: "Every challenge starts with a fresh lens. Our insights-driven approach uncovers new ways to understand your customers and redefine your brand’s opportunities."})}
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
                {t('cards.1.title.0', {fallback: "Commercially"})} <br />
                {t('cards.1.title.1', {fallback: "Driven Thinking"})}
              </h3>
              <span className="divider"></span>
              <p>
                {t('cards.1.description', {fallback: "We refocus your brand to deliver profit, value, and lasting impact—because enthusiasm alone won't sustain success."})}
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
                {t('cards.2.title.0', {fallback: "Innovative"})}
                <br />
                {t('cards.2.title.1', {fallback: "Experimentation"})}
              </h3>
              <span className="divider"></span>
              <p>
                {t('cards.2.description', {fallback: "We embrace cutting-edge technologies and challenge conventional norms to explore what’s next for your business."})}
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
                {t('cards.3.title.0', {fallback: "Meticulous"})} <br />
                {t('cards.3.title.1', {fallback: "Craftsmanship"})}
              </h3>
              <span className="divider"></span>
              <p>
                {t('cards.3.description', {fallback: "Success requires ongoing education and partnerships with experts to keep up with trends and best practices."})}
              </p>
            </motion.div>
          </SwiperSlide>
        </Swiper>
        <div className="button-wrap">
          <RequestButton text={t('button', {fallback: "Let’s Start Your Brand"})} />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
