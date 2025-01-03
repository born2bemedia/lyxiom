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
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/contact/address.svg" />
              <p>
                2nd Floor College House, 17 King Edwards Road, Ruislip, HA4 7AE,
                London, United Kingdom
              </p>
              <div className="map">
                <span>Registered address</span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.661626961048!2d-0.4312570234929074!3d51.57443637182864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766c5ef8135fab%3A0xea8b48d8088de68!2sCollege%20House%2C%2017%20King%20Edwards%20Rd%2C%20Ruislip%20HA4%207AE%2C%20UK!5e0!3m2!1sen!2sua!4v1733486294063!5m2!1sen!2sua"
                  width="343"
                  height="151"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src="/images/contact/address.svg" />
              <p>
                Office 21, 1st floor, 286 Chase Road, LND N14 6HF, London, United
                Kingdom
              </p>
              <div className="map">
                <span>Office address</span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.4257759268817!2d-0.12910382348922386!3d51.633727171842274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876191baa682457%3A0xa9379205db6f6c2b!2sWillmott%20Dixon%20Ltd%2C%20286%20Chase%20Rd%2C%20London%20N14%206HF%2C%20UK!5e0!3m2!1sen!2sua!4v1733486419638!5m2!1sen!2sua"
                  width="343"
                  height="151"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
              <Link href="tel:+447449702908">
                <img src="/images/contact/phone.svg" />
                +447449702908
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link href="mailto:info@lyxiom.co">
                <img src="/images/contact/mail.svg" />
                info@lyxiom.co
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
