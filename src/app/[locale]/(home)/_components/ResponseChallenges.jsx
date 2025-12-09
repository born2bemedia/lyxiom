"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ResponseChallenges = () => {
  const t = useTranslations("home.response");

  return (
    <section className="response-challenges">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', {fallback: "Lyxiom Response to New Challenges"})}
        </motion.h2>
        <div className="response-challenges__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">01</span>
            <div>
              <h3>{t('cards.0.title', {fallback: "Brand Packing"})}</h3>
              <span>
                <p>
                  {t('cards.0.description', {fallback: "Crafting and positioning brands with a winning strategy, integrating product, service, and experience design to ensure impactful market entry and growth."})}
                </p>
              </span>
            </div>
            <Link href="/services/brand-design" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              {t('cards.0.description', {fallback: "Crafting and positioning brands with a winning strategy, integrating product, service, and experience design to ensure impactful market entry and growth."})}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">02</span>
            <div>
              <h3>{t('cards.1.title', {fallback: "Content Design"})}</h3>
              <span>
                <p>
                  {t('cards.1.description', {fallback: "Developing targeted, data-driven content that resonates, drives engagement, and keeps audiences connected across all channels."})}
                </p>
              </span>
            </div>
            <Link href="/services/content-and-brand-story-design" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              {t('cards.1.description', {fallback: "Developing targeted, data-driven content that resonates, drives engagement, and keeps audiences connected across all channels."})}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">03</span>
            <div>
              <h3>{t('cards.2.title', {fallback: "SMM"})}</h3>
              <span>
                <p>
                  {t('cards.2.description', {fallback: "Developing tailored social media strategies to increase reach and engagement, leveraging trends and real-time data to build a loyal following."})}
                </p>
              </span>
            </div>
            <Link href="/services/smm" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              {t('cards.2.description', {fallback: "Developing tailored social media strategies to increase reach and engagement, leveraging trends and real-time data to build a loyal following."})}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">04</span>
            <div>
              <h3>{t('cards.3.title', {fallback: "SEO"})}</h3>
              <span>
                <p>
                  {t('cards.3.description', {fallback: "Optimising every aspect of your brand for search, ensuring maximum visibility with precise, trend-driven keyword strategies and technical excellence."})}
                </p>
              </span>
            </div>
            <Link href="/services/seo" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              {t('cards.3.description', {fallback: "Optimising every aspect of your brand for search, ensuring maximum visibility with precise, trend-driven keyword strategies and technical excellence."})}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">05</span>
            <div>
              <h3>{t('cards.4.title', {fallback: "Performance"})}</h3>
              <span>
                <p>
                  {t('cards.4.description', {fallback: "Running advanced ad campaigns focused on cost efficiency and high ROI, adapting quickly to market changes and user behaviour trends."})}
                </p>
              </span>
            </div>
            <Link href="/services/performance" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              {t('cards.4.description', {fallback: "Running advanced ad campaigns focused on cost efficiency and high ROI, adapting quickly to market changes and user behaviour trends."})}
            </p>
          </motion.div>
        </div>
        <MainButton text={"Explore Services"} link={"/services"} />
      </div>
      <div className="marquee-container">
        <span className="marquee">
          Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom
        </span>
      </div>
    </section>
  );
};

export default ResponseChallenges;
