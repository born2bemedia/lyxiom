"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WayHero = () => {
  const t = useTranslations("yourWay.hero");

  return (
    <section className="way-hero">
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
        <div className="way-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title.0', {fallback: "Your"})} <span>{t('title.1', {fallback: "Way"})}</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('description', {fallback: "Your journey from idea to success, reimagined."})}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/images/way/hero.png"
              height={311}
              width={1110}
              alt="hero"
              className="pc"
            />
            <Image
              src="/images/way/hero-mob.png"
              height={311}
              width={1110}
              alt="hero"
              className="mob"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WayHero;
