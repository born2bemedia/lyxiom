"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import { useTranslations } from "next-intl";

const getServices = (t) => [
  {
    id: 1,
    title: t('cards.0.title', {fallback: "Brand Design"}),
    description:
      t('cards.0.description', {fallback: "A strong brand starts with research and strategy. We deliver market insights, target audience analysis, and core brand concepts, laying the groundwork for impactful growth."}),
    buttonText: t('cards.0.buttonText', {fallback: "Start"}),
    buttonLink: "brand-design",
  },
  {
    id: 2,
    title: t('cards.1.title', {fallback: "Product, Service, Experience Design"}),
    description:
      t('cards.1.description', {fallback: "Products and services gain value through intuitive design and purposeful interactions. Using user research and behavioural insights, we create solutions that connect seamlessly with your audience."}),
    buttonText: t('cards.1.buttonText', {fallback: "Invent"}),
    buttonLink: "product-service-experience-design",
  },
  {
    id: 3,
    title: t('cards.2.title', {fallback: "Content and Brand Story Design"}),
    description:
      t('cards.2.description', {fallback: "Every brand has a story. Through tailored narratives, structured messaging, and creative execution, we shape a cohesive voice that aligns with your goals and audience."}),
    buttonText: t('cards.2.buttonText', {fallback: "Create"}),
    buttonLink: "content-and-brand-story-design",
  },
  {
    id: 4,
    title: t('cards.3.title', {fallback: "Social Media Management"}),
    description:
      t('cards.3.description', {fallback: "Effective social media presence requires consistency and relevance. We provide platform-specific strategies, content creation, and audience engagement tailored to your goals."}),
    buttonText: t('cards.3.buttonText', {fallback: "Go Social"}),
    buttonLink: "smm",
  },
  {
    id: 5,
    title: t('cards.4.title', {fallback: "Search Engine Optimization"}),
    description:
      t('cards.4.description', {fallback: "Visibility in search is built on precision. Our approach integrates technical improvements, keyword research, and content alignment to elevate your discoverability."}),
    buttonText: t('cards.4.buttonText', {fallback: "Go Top"}),
    buttonLink: "seo",
  },
  {
    id: 6,
    title: t('cards.5.title', {fallback: "Performance"}),
    description:
      t('cards.5.description', {fallback: "Advertising success relies on data and adaptability. We deliver precise audience segmentation, real-time adjustments, and optimised campaigns for impactful results."}),
    buttonText: t('cards.5.buttonText', {fallback: "Advertise"}),
    buttonLink: "performance",
  },
  {
    id: 7,
    title: t('cards.6.title', {fallback: "Brand Scaling"}),
    description:
      t('cards.6.description', {fallback: "Sustainable growth comes from strategy and adaptability. We focus on operational efficiency, audience expansion, and innovative solutions to help your brand reach new heights."}),
    buttonText: t('cards.6.buttonText', {fallback: "Scale"}),
    buttonLink: "brand-scaling",
  },
];

const ServicesLoop = () => {
  const t = useTranslations("services.loop");

  const services = getServices(t);

  return (
    <section className="services-loop">
      <div className="_container">
        <div className="services-loop__body">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span className="number">
                {service.id.toString().padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="buttons">
                <MainButton
                  text={service.buttonText}
                  link={`/services/${service.buttonLink}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLoop;
