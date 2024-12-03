"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import RequestButton from "@/components/RequestButton";

const WhatMeans = () => {
  return (
    <section className="home-means">
      <div className="_container">
        <div className="home-means__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-01"
          >
            <h2>What Lyxiom Means</h2>
            <RequestButton text={"Start Your Brand"} />
          </motion.div>
          <div className="col-02">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Top-10</h3>
              <h4>Google, Bing, Yahoo</h4>
              <p>Within the following 6 months</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>+47%</h3>
              <h4>of Average CTR</h4>
              <p>Through learning of your audience</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>20%+</h3>
              <h4>Monthly Growth</h4>
              <p>With data and performance marketing</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>+150%</h3>
              <h4>Organic Traffic</h4>
              <p>Through quality content and diplomacy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMeans;
