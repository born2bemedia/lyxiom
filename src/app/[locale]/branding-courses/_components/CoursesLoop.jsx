"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import { useTranslations } from "next-intl";

const CoursesLoop = () => {
  const t = useTranslations("brandingCourses.loop");

  return (
    <section className="courses-wrap">
      <div className="_container">
        <div className="courses-wrap__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="package"
          >
            <div>
              <div className="top">
                <h2>
                  {t('cards.0.title', {fallback: "Market Research 101: Understanding Your Audience Without Breaking the Bank"})}
                </h2>
                <span className="divider"></span>
                <div className="content">
                  <p>
                    {t('cards.0.description', {fallback: "Discover practical, low-cost methods to identify your target market, uncover customer needs, and set your brand on the path to success. Perfect for beginners looking to build a strong foundation."})}
                  </p>
                </div>
              </div>
              <MainButton
                text={t('read', {fallback: "Read"})}
                link={
                  "/branding-courses/market-research-101-understanding-your-audience-without-breaking-the-bank"
                }
              />
              <img src="/images/courses/01.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="package"
          >
            <div>
              <div className="top">
                <h2>
                  {t('cards.1.title', {fallback: "Competitor Analysis: Spotting Opportunities to Stand Out"})}
                </h2>
                <span className="divider"></span>
                <div className="content">
                  <p>
                    {t('cards.1.description', {fallback: "Learn step-by-step techniques to uncover competitor strengths and weaknesses, spot market gaps, and position your brand for success in a crowded marketplace."})}
                  </p>
                </div>
              </div>
              <MainButton
                text={t('read', {fallback: "Read"})}
                link={
                  "/branding-courses/competitor-analysis-spotting-opportunities-to-stand-out"
                }
              />
              <img src="/images/courses/02.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="package"
          >
            <div>
              <div className="top">
                <h2>
                  {t('cards.2.title', {fallback: "Growing Your Social Media Audience: Free and Effective Strategies"})}
                </h2>
                <span className="divider"></span>
                <div className="content">
                  <p>
                    {t('cards.2.description', {fallback: "Unlock practical, no-cost methods to boost your social media presence, engage followers, and grow your audience organically with proven techniques."})}
                  </p>
                </div>
              </div>
              <MainButton
                text={t('read', {fallback: "Read"})}
                link={
                  "/branding-courses/growing-your-social-media-audience-free-and-effective-strategies"
                }
              />
              <img src="/images/courses/03.svg" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="package"
          >
            <div>
              <div className="top">
                <h2>
                  {t('cards.3.title', {fallback: "Building Your Brand Identity: Colours, Logos, and Messaging on a Budget"})}
                </h2>
                <span className="divider"></span>
                <div className="content">
                  <p>
                    {t('cards.3.description', {fallback: "Craft a standout brand identity with budget-friendly tips on choosing the right colours, designing impactful logos, and creating compelling messaging that resonates."})}
                  </p>
                </div>
              </div>
              <MainButton
                text={t('read', {fallback: "Read"})}
                link={
                  "/branding-courses/building-your-brand-identity-colours-logos-and-messaging-on-a-budget"
                }
              />
              <img src="/images/courses/04.svg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesLoop;
