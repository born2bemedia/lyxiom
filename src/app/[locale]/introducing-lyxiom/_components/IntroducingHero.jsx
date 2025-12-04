"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IntroducingHero = () => {
  const t = useTranslations("introducing.hero");

  return (
    <section className="introducing-hero">
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
        <div className="introducing-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', {fallback: "Introducing"})}<span>Lyxiom</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('description', {fallback: "A new perspective on success, crafted just for you."})}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/intro/hero.png"
              height={311}
              width={1110}
              alt="hero"
              className="pc"
            />
            <Image
              src="/images/intro/hero-mob.png"
              height={400}
              width={400}
              alt="hero"
              className="mob"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingHero;
