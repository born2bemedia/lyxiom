"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestButton from "@/components/RequestButton";
import { useTranslations } from "next-intl";

const Steps = () => {
  const t = useTranslations("yourWay.steps");

  return (
    <section className="steps">
      <div className="_container">
        <div className="steps__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step1.svg" />
            <div>
              <h3>
                <span>{t('cards.0.title.0', {fallback: "Step 1:"})}</span>
                {t('cards.0.title.1', {fallback: "Your Vision, Our Start"})}
              </h3>
              <p>{t('cards.0.description', {fallback: "You send us a request, and the journey begins."})}</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step2.svg" />
            <div>
              <h3>
                <span>{t('cards.1.title.0', {fallback: "Step 2:"})}</span>
                {t('cards.1.title.1', {fallback: "Getting to Know You"})}
              </h3>
              <p>
                {t('cards.1.description.0', {fallback: "Our team reaches out to gather essential details"})} <br />
                {t('cards.1.description.1', {fallback: "about your needs, goals, and challenges."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step3.svg" />
            <div>
              <h3>
                <span>{t('cards.2.title.0', {fallback: "Step 3:"})}</span>
                {t('cards.2.title.1', {fallback: "Tailored Expertise Assembled"})}
              </h3>
              <p>
                {t('cards.2.description.0', {fallback: "We build a dedicated team and assign tasks to"})} <br />
                {t('cards.2.description.1', {fallback: "match your vision."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step4.svg" />
            <div>
              <h3>
                <span>{t('cards.3.title.0', {fallback: "Step 4:"})}</span>
                {t('cards.3.title.1', {fallback: "Insightful Research"})}
              </h3>
              <p>
                {t('cards.3.description.0', {fallback: "From market analysis to customer insights, we"})} <br />
                {t('cards.3.description.1', {fallback: "uncover data to inform your solution."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step5.svg" />
            <div>
              <h3>
                <span>{t('cards.4.title.0', {fallback: "Step 5:"})}</span>
                {t('cards.4.title.1', {fallback: "Custom Solutions Delivered"})}
              </h3>
              <p>
                {t('cards.4.description.0', {fallback: "We craft and share a bespoke solution,"})} <br />
                {t('cards.4.description.1', {fallback: "refining it together to achieve perfection."})}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step6.svg" />
            <div>
              <h3>
                <span>{t('cards.5.title.0', {fallback: "Step 6:"})}</span>
                {t('cards.5.title.1', {fallback: "Results That Matter"})}
              </h3>
              <p>
                {t('cards.5.description.0', {fallback: "With your solution in action, we track outcomes"})} <br />
                {t('cards.5.description.1', {fallback: "and ensure measurable success."})}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="button-wrap">
          <RequestButton text={t('button', {fallback: "Let’s Start Your Brand"})} />
        </div>
      </div>
    </section>
  );
};

export default Steps;
