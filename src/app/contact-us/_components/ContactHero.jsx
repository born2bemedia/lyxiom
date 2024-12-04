"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="contact-hero">
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
        <div className="contact-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Start Your Brand <span>Here</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Connecting ideas. Starting journeys. Building success.
          </motion.p>
        </div>
        <div className="contact-hero__bottom">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Addresses
          </motion.h2>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/contact/address.svg" />
              <p>Text</p>
              <span></span>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/contact/address.svg" />
              <p>Text</p>
              <span></span>
            </motion.div>
          </div>
        </div>
        <div className="contact-hero__bottom">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Direct Contacts
          </motion.h2>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href="#">
                <img src="/images/contact/phone.svg" />
                Text
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href="#">
                <img src="/images/contact/mail.svg" />
                Text
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
