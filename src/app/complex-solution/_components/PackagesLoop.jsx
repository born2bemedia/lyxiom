"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const PackagesLoop = () => {
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
                  <h2>Start Package</h2>
                  <img src="/images/complex/pack1.svg" />
                </div>
                <div className="content">
                  <b>For those starting from scratch.</b>
                  <p>
                    Ideal for individuals with no existing brand presence who
                    need complete support from concept to promotion.
                  </p>
                  <b>What's Included:</b>
                  <ul>
                    <li>Brand ideation and validation</li>
                    <li>Market and audience research</li>
                    <li>Brand identity development (visuals, naming, voice)</li>
                    <li>Website or platform setup</li>
                    <li>Launch promotion and initial advertising campaigns</li>
                  </ul>
                </div>
              </div>
              <OrderButton text={"Request Now"} serviceName={"Start Package"} />
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
                  <h2>Grow Package</h2>
                  <img src="/images/complex/pack2.svg" />
                </div>
                <div className="content">
                  <b>For brands seeking a fresh start.</b>
                  <p>
                    Perfect for customers with a struggling brand that needs
                    optimization to achieve growth and better performance.
                  </p>
                  <b>What’s Included:</b>
                  <ul>
                    <li>Brand and audience analysis</li>
                    <li>Market gap identification</li>
                    <li>Social media and website optimization</li>
                    <li>Content strategy and enhanced branding elements</li>
                    <li>Targeted advertising and promotional campaigns</li>
                  </ul>
                </div>
              </div>
              <OrderButton text={"Request Now"} serviceName={"Grow Package"} />
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
                  <h2>Scale Package</h2>
                  <img src="/images/complex/pack3.svg" />
                </div>
                <div className="content">
                  <b>For brands ready to dominate.</b>
                  <p>
                    Designed for successful brands aiming to outgrow their
                    competitors and break through growth barriers.
                  </p>
                  <b>What's Included:</b>
                  <ul>
                    <li>Advanced competitor analysis</li>
                    <li>Identification of scaling opportunities</li>
                    <li>Strategic marketing techniques</li>
                    <li>High-impact advertising campaigns</li>
                    <li>
                      Enhanced engagement tools and growth-focused solutions
                    </li>
                  </ul>
                </div>
              </div>
              <OrderButton text={"Request Now"} serviceName={"Scale Package"} />
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
                  <h2>Tailored Package</h2>
                  <img src="/images/complex/pack4.svg" />
                </div>
                <div className="content">
                  <b>Solutions for unique challenges.</b>
                  <p>
                    For individuals or brands requiring personalised strategies
                    to solve specific issues or achieve ambitious goals.
                  </p>
                  <b>What's Included:</b>
                  <ul>
                    <li>Custom analysis of your brand’s needs</li>
                    <li>Bespoke service combinations</li>
                    <li>
                      Flexible and goal-oriented solutions tailored to your case
                    </li>
                    <li>Full consultation to ensure the best outcomes</li>
                  </ul>
                </div>
              </div>
              <OrderButton
                text={"Request Now"}
                serviceName={"Tailored Package"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagesLoop;
