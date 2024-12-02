"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";

const services = [
  {
    id: 1,
    title: "Brand Design",
    description:
      "A strong brand starts with research and strategy. We deliver market insights, target audience analysis, and core brand concepts, laying the groundwork for impactful growth.",
    buttonText: "Start",
    buttonLink: "brand-design",
  },
  {
    id: 2,
    title: "Product, Service, Experience Design",
    description:
      "Products and services gain value through intuitive design and purposeful interactions. Using user research and behavioural insights, we create solutions that connect seamlessly with your audience.",
    buttonText: "Invent",
    buttonLink: "product-service-experience-design",
  },
  {
    id: 3,
    title: "Content and Brand Story Design",
    description:
      "Every brand has a story. Through tailored narratives, structured messaging, and creative execution, we shape a cohesive voice that aligns with your goals and audience.",
    buttonText: "Create",
    buttonLink: "content-and-brand-story-design",
  },
  {
    id: 4,
    title: "Social Media Management",
    description:
      "Effective social media presence requires consistency and relevance. We provide platform-specific strategies, content creation, and audience engagement tailored to your goals.",
    buttonText: "Go Social",
    buttonLink: "smm",
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    description:
      "Visibility in search is built on precision. Our approach integrates technical improvements, keyword research, and content alignment to elevate your discoverability.",
    buttonText: "Go Top",
    buttonLink: "seo",
  },
  {
    id: 6,
    title: "Performance",
    description:
      "Advertising success relies on data and adaptability. We deliver precise audience segmentation, real-time adjustments, and optimised campaigns for impactful results.",
    buttonText: "Advertise",
    buttonLink: "performance",
  },
  {
    id: 7,
    title: "Brand Scaling",
    description:
      "Sustainable growth comes from strategy and adaptability. We focus on operational efficiency, audience expansion, and innovative solutions to help your brand reach new heights.",
    buttonText: "Scale",
    buttonLink: "brand-scaling",
  },
];

const ServicesLoop = () => {
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
              <MainButton
                text={service.buttonText}
                link={`/services/${service.buttonLink}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLoop;
