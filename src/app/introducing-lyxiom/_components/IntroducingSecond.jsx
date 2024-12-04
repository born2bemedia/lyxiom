"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const IntroducingSecond = () => {
  return (
    <section className="introducing-second">
      <div className="_container">
        <div className="introducing-second__body">
          <div>
            <span>8</span> Industry Leaders
          </div>
          <div>
            Only <span>120</span> Hours to Your Success
          </div>
          <div>
            <span>0</span> Chances to Fail
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSecond;
