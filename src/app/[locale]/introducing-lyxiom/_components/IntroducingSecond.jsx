"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import CountUpOnViewport from "@/components/CountUpOnViewport";
import { useTranslations } from "next-intl";

const IntroducingSecond = () => {
  const t = useTranslations("introducing.second");

  return (
    <section className="introducing-second">
      <div className="_container">
        <div className="introducing-second__body">
          <div>
          <CountUpOnViewport targetNumber={8} />  {t('title', {fallback: "Industry Leaders"})}
          </div>
          <div>
            {t('subtitle.0', {fallback: "Only"})} <span className="number"><CountUpOnViewport targetNumber={120} /></span> {t('subtitle.1', {fallback: "Hours to Your Success"})}
          </div>
          <div>
          <CountUpOnViewport targetNumber={0} /> {t('subtitle2', {fallback: "Chances to Fail"})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSecond;
