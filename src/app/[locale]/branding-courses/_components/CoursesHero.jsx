"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CoursesHero = () => {
  const t = useTranslations("brandingCourses.hero");

  return (
    <section className="courses-hero">
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
      <div className="_container">
        <div className="courses-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title.0', {fallback: "Branding"})} <span>{t('title.1', {fallback: "Courses"})}</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('description', {fallback: "Essential steps. Practical guidance. Your brand’s evolution, simplified."})}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/courses/hero.png"
              height={311}
              width={1110}
              alt="hero"
              className="pc"
            />
            <Image
              src="/images/courses/hero-mob.png"
              height={311}
              width={1110}
              alt="hero"
              className="mob"
            />
          </motion.div>
        </div>
      </div>
      <div className="marquee-container">
        <span className="marquee">
          Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom
        </span>
      </div>
    </section>
  );
};

export default CoursesHero;
