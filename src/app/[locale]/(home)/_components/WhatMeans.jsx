"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import RequestButton from "@/components/RequestButton";
import CountUpOnViewport from "@/components/CountUpOnViewport";
import { useTranslations } from "next-intl";

const WhatMeans = () => {
  const t = useTranslations("home.whatMeans");

  return (
    <section className="home-means">
      <div className="_container">
        <div className="home-means__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-01"
          >
            <h2>{t('title', {fallback: "What Lyxiom Means"})}</h2>
            <RequestButton text={t('button', {fallback: "Start Your Brand"})} />
          </motion.div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>
                {t('cards.0.title', {fallback: "Top"})}-
                <CountUpOnViewport targetNumber={10} />
              </h3>
              <h4>{t('cards.0.description', {fallback: "Google, Bing, Yahoo"})}</h4>
              <p>{t('cards.0.subtitle', {fallback: "Within the following 6 months"})}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>+<CountUpOnViewport targetNumber={47} />%</h3>
              <h4>{t('cards.1.description', {fallback: "of Average CTR"})}</h4>
              <p>{t('cards.1.subtitle', {fallback: "Through learning of your audience"})}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3><CountUpOnViewport targetNumber={20} />%+</h3>
              <h4>{t('cards.2.description', {fallback: "Monthly Growth"})}</h4>
              <p>{t('cards.2.subtitle', {fallback: "With data and performance marketing"})}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>+<CountUpOnViewport targetNumber={150} />%</h3>
              <h4>{t('cards.3.description', {fallback: "Organic Traffic"})}</h4>
              <p>{t('cards.3.subtitle', {fallback: "Through quality content and diplomacy"})}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMeans;
