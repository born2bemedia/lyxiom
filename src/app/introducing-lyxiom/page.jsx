import React from "react";
import "@/styles/introducing.scss";
import IntroducingHero from "./_components/IntroducingHero";
import HowWeWork from "./_components/HowWeWork";
import IntroducingSecond from "./_components/IntroducingSecond";

export const metadata = {
    title: "About Us | Lyxiom",
    description:
      "Discover Lyxiom's expert-driven approach to brand development. Explore how our insights, creativity, and strategies help elevate your brand.",
    openGraph: {
      title: "About Us | Lyxiom",
      description:
        "Discover Lyxiom's expert-driven approach to brand development. Explore how our insights, creativity, and strategies help elevate your brand.",
      //images: "",
    },
  };

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
