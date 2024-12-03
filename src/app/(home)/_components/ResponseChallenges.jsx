"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";

const ResponseChallenges = () => {
  return (
    <section className="response-challenges">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Lyxiom Response to New Challenges
        </motion.h2>
        <div className="response-challenges__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">01</span>
            <div>
              <h3>Brand Packing</h3>
              <span>
                <p>
                  Crafting and positioning brands with a winning strategy,
                  integrating product, service, and experience design to ensure
                  impactful market entry and growth.
                </p>
              </span>
            </div>
            <Link href="/services/brand-design" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              Crafting and positioning brands with a winning strategy,
              integrating product, service, and experience design to ensure
              impactful market entry and growth.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">02</span>
            <div>
              <h3>Content Design</h3>
              <span>
                <p>
                  Developing targeted, data-driven content that resonates,
                  drives engagement, and keeps audiences connected across all
                  channels.
                </p>
              </span>
            </div>
            <Link href="/services/content-and-brand-story-design" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              Developing targeted, data-driven content that resonates, drives
              engagement, and keeps audiences connected across all channels.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">03</span>
            <div>
              <h3>SMM</h3>
              <span>
                <p>
                  Developing tailored social media strategies to increase reach
                  and engagement, leveraging trends and real-time data to build
                  a loyal following.
                </p>
              </span>
            </div>
            <Link href="/services/smm" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              Developing tailored social media strategies to increase reach and
              engagement, leveraging trends and real-time data to build a loyal
              following.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">04</span>
            <div>
              <h3>SEO</h3>
              <span>
                <p>
                  Optimising every aspect of your brand for search, ensuring
                  maximum visibility with precise, trend-driven keyword
                  strategies and technical excellence.
                </p>
              </span>
            </div>
            <Link href="/services/seo" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              Optimising every aspect of your brand for search, ensuring maximum
              visibility with precise, trend-driven keyword strategies and
              technical excellence.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <span className="number">05</span>
            <div>
              <h3>Performance</h3>
              <span>
                <p>
                  Running advanced ad campaigns focused on cost efficiency and
                  high ROI, adapting quickly to market changes and user
                  behaviour trends.
                </p>
              </span>
            </div>
            <Link href="/services/performance" className="arrow">
              <ButtonArrow />
            </Link>
            <p className="mobile-text">
              Running advanced ad campaigns focused on cost efficiency and high
              ROI, adapting quickly to market changes and user behaviour trends.
            </p>
          </motion.div>
        </div>
        <MainButton text={"Explore Services"} link={"/services"} />
      </div>
      <div className="marquee-container">
        <span className="marquee">
          Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom&nbsp;&nbsp;Lyxiom
        </span>
      </div>
    </section>
  );
};

export default ResponseChallenges;
