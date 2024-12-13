"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import CountUpOnViewport from "@/components/CountUpOnViewport";

const IntroducingSecond = () => {
  return (
    <section className="introducing-second">
      <div className="_container">
        <div className="introducing-second__body">
          <div>
          <CountUpOnViewport targetNumber={8} />  Industry Leaders
          </div>
          <div>
            Only <span className="number"><CountUpOnViewport targetNumber={120} /></span> Hours to Your Success
          </div>
          <div>
          <CountUpOnViewport targetNumber={0} /> Chances to Fail
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSecond;
