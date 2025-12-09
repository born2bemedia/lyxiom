"use client";
import React, { useEffect, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const InnerSercviceHero = ({ title, subtitle, slug }) => {
  const [serviceClass, setServiceClass] = useState("");
  const [imageSuffix, setImageSuffix] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768; 
      setImageSuffix(mobile ? "-mob" : "");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (slug == "product-service-experience-design") {
      setServiceClass("space-between-product");
    } else if (slug == "content-and-brand-story-design") {
      setServiceClass("space-between");
    }
  }, [slug]);

  return (
    <section className={`services-hero ${serviceClass}`}>
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
        <div className="services-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src={`/images/services/${slug}${imageSuffix}.png`}
              height={311}
              width={1110}
              alt="hero"
            />
          </motion.div>
        </div>
      </div>
      <div className="marquee-container">
        <span className="marquee">
          Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom
        </span>
      </div>
    </section>
  );
};

export default InnerSercviceHero;
