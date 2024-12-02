"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "./MainButton";

const CtaBlock = ({ title, subtitle, buttonLink, buttonText }) => {
  return (
    <section className="cta">
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
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cta__body"
        >
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <MainButton text={buttonText} link={buttonLink} />
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBlock;
