"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import MainButton from "./MainButton";

const ContactBlock = ({ text, buttonText, buttonLink, imageUrl }) => {
  return (
    <section className="contact-block">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="contact-block__body"
        >
          <div style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <h2 dangerouslySetInnerHTML={{ __html: text }} />
          <MainButton text={buttonText} link={buttonLink} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBlock;
