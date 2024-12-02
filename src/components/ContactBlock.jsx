"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import MainButton from "./MainButton";

const ContactBlock = () => {
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
          <h2>Need Assistance? Contact Lyxiom!</h2>
          <MainButton text={"Contact Us"} link={"#"} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBlock;
