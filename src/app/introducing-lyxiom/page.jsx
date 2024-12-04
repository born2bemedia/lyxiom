import React from "react";
import "@/styles/introducing.scss";
import IntroducingHero from "./_components/IntroducingHero";
import HowWeWork from "./_components/HowWeWork";
import IntroducingSecond from "./_components/IntroducingSecond";

const IntroducingLyxiom = () => {
  return (
    <>
      <IntroducingHero />
      <IntroducingSecond />
      <HowWeWork />
    </>
  );
};

export default IntroducingLyxiom;
