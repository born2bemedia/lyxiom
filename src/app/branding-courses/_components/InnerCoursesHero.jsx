"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const InnerCoursesHero = ({ title }) => {
  return (
    <section className="inner-courses-hero">
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
        <div className="inner-courses-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    </section>
  );
};

export default InnerCoursesHero;
