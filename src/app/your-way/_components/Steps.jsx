"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestButton from "@/components/RequestButton";

const Steps = () => {
  return (
    <section className="steps">
      <div className="_container">
        <div className="steps__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step1.svg" />
            <div>
              <h3>
                <span>Step 1:</span>
                Your Vision, Our Start
              </h3>
              <p>You send us a request, and the journey begins.</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step2.svg" />
            <div>
              <h3>
                <span>Step 2:</span>
                Getting to Know You
              </h3>
              <p>
                Our team reaches out to gather essential details <br />
                about your needs, goals, and challenges.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step3.svg" />
            <div>
              <h3>
                <span>Step 3:</span>
                Tailored Expertise Assembled
              </h3>
              <p>
                We build a dedicated team and assign tasks to <br />
                match your vision.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step4.svg" />
            <div>
              <h3>
                <span>Step 4:</span>
                Insightful Research
              </h3>
              <p>
                From market analysis to customer insights, we <br />
                uncover data to inform your solution.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step5.svg" />
            <div>
              <h3>
                <span>Step 5:</span>
                Custom Solutions Delivered
              </h3>
              <p>
                We craft and share a bespoke solution, <br />
                refining it together to achieve perfection.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="step"
          >
            <img src="/images/way/step6.svg" />
            <div>
              <h3>
                <span>Step 6:</span>
                IResults That Matter
              </h3>
              <p>
                With your solution in action, we track outcomes <br />
                and ensure measurable success.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="button-wrap">
          <RequestButton text={"Let’s Start Your Brand"} />
        </div>
      </div>
    </section>
  );
};

export default Steps;
