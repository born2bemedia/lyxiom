"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import { useTranslations } from "next-intl";

const PackagesLoop = () => {
  const t = useTranslations("complexSolution.packages");

  return (
    <section className="packages-wrap">
      <div className="_container">
        <div className="packages-wrap__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="package"
          >
            <div>
              <div className="top">
                <div className="title">
                  <h2>{t('cards.0.title', {fallback: "Start Package"})}</h2>
                  <img src="/images/complex/pack1.svg" />
                </div>
                <div className="content">
                  <b>{t('cards.0.subtitle', {fallback: "For those starting from scratch."})}</b>
                  <p>
                    {t('cards.0.description', {fallback: "Ideal for individuals with no existing brand presence who need complete support from concept to promotion."})}
                  </p>
                  <b>{t('cards.0.whatsIncludedTitle', {fallback: "What's Included:"})}</b>
                  <ul>
                    <li>{t('cards.0.whatsIncluded.0', {fallback: "Brand ideation and validation"})}</li>
                    <li>{t('cards.0.whatsIncluded.1', {fallback: "Market and audience research"})}</li>
                    <li>{t('cards.0.whatsIncluded.2', {fallback: "Brand identity development (visuals, naming, voice)"})}</li>
                    <li>{t('cards.0.whatsIncluded.3', {fallback: "Website or platform setup"})}</li>
                    <li>{t('cards.0.whatsIncluded.4', {fallback: "Launch promotion and initial advertising campaigns"})}</li>
                  </ul>
                </div>
              </div>
              <OrderButton text={t('cards.0.buttonText', {fallback: "Request Now"})} serviceName={t('cards.0.serviceName', {fallback: "Start Package"})} />
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
                <div className="title">
                  <h2>{t('cards.1.title', {fallback: "Grow Package"})}</h2>
                  <img src="/images/complex/pack2.svg" />
                </div>
                <div className="content">
                  <b>{t('cards.1.subtitle', {fallback: "For brands seeking a fresh start."})}</b>
                  <p>
                    {t('cards.1.description', {fallback: "Perfect for customers with a struggling brand that needs optimization to achieve growth and better performance."})}
                  </p>
                  <b>{t('cards.1.whatsIncludedTitle', {fallback: "What's Included:"})}</b>
                  <ul>
                    <li>{t('cards.1.whatsIncluded.0', {fallback: "Brand and audience analysis"})}</li>
                    <li>{t('cards.1.whatsIncluded.1', {fallback: "Market gap identification"})}</li>
                    <li>{t('cards.1.whatsIncluded.2', {fallback: "Social media and website optimization"})}</li>
                    <li>{t('cards.1.whatsIncluded.3', {fallback: "Content strategy and enhanced branding elements"})}</li>
                    <li>{t('cards.1.whatsIncluded.4', {fallback: "Targeted advertising and promotional campaigns"})}</li>
                  </ul>
                </div>
              </div>
              <OrderButton text={t('cards.1.buttonText', {fallback: "Request Now"})} serviceName={t('cards.1.serviceName', {fallback: "Grow Package"})} />
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
                <div className="title">
                  <h2>{t('cards.2.title', {fallback: "Scale Package"})}</h2>
                  <img src="/images/complex/pack3.svg" />
                </div>
                <div className="content">
                  <b>{t('cards.2.subtitle', {fallback: "For brands ready to dominate."})}</b>
                  <p>
                    {t('cards.2.description', {fallback: "Designed for successful brands aiming to outgrow their competitors and break through growth barriers."})}
                  </p>
                  <b>{t('cards.2.whatsIncludedTitle', {fallback: "What's Included:"})}</b>
                  <ul>
                    <li>{t('cards.2.whatsIncluded.0', {fallback: "Advanced competitor analysis"})}</li>
                    <li>{t('cards.2.whatsIncluded.1', {fallback: "Identification of scaling opportunities"})}</li>
                    <li>{t('cards.2.whatsIncluded.2', {fallback: "Strategic marketing techniques"})}</li>
                    <li>{t('cards.2.whatsIncluded.3', {fallback: "High-impact advertising campaigns"})}</li>
                    <li>{t('cards.2.whatsIncluded.4', {fallback: "Enhanced engagement tools and growth-focused solutions"})}</li>
                  </ul>
                </div>
              </div>
              <OrderButton text={t('cards.2.buttonText', {fallback: "Request Now"})} serviceName={t('cards.2.serviceName', {fallback: "Scale Package"})} />
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
                <div className="title">
                  <h2>{t('cards.3.title', {fallback: "Tailored Package"})}</h2>
                  <img src="/images/complex/pack4.svg" />
                </div>
                <div className="content">
                  <b>{t('cards.3.subtitle', {fallback: "Solutions for unique challenges."})}</b>
                  <p>
                    {t('cards.3.description', {fallback: "For individuals or brands requiring personalised strategies to solve specific issues or achieve ambitious goals."})}
                  </p>
                  <b>{t('cards.3.whatsIncludedTitle', {fallback: "What's Included:"})}</b>
                  <ul>
                    <li>{t('cards.3.whatsIncluded.0', {fallback: "Custom analysis of your brand’s needs"})}</li>
                    <li>{t('cards.3.whatsIncluded.1', {fallback: "Bespoke service combinations"})}</li>
                    <li>{t('cards.3.whatsIncluded.2', {fallback: "Flexible and goal-oriented solutions tailored to your case"})}</li>
                    <li>{t('cards.3.whatsIncluded.3', {fallback: "Full consultation to ensure the best outcomes"})}</li>
                  </ul>
                </div>
              </div>
              <OrderButton
                text={t('cards.3.buttonText', {fallback: "Request Now"})}
                serviceName={t('cards.3.serviceName', {fallback: "Tailored Package"})}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagesLoop;
