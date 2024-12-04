import React from "react";
import "@/styles/way.scss";
import WayHero from "./_components/WayHero";
import Steps from "./_components/Steps";

export const metadata = {
  title: "How We Promote Brands | Lyxiom",
  description:
    "Explore how Lyxiom turns your ideas into success with a step-by-step approach designed to meet your goals. From requests to measurable results, your brand journey starts here.",
  openGraph: {
    title: "How We Promote Brands | Lyxiom",
    description:
      "Explore how Lyxiom turns your ideas into success with a step-by-step approach designed to meet your goals. From requests to measurable results, your brand journey starts here.",
    //images: "",
  },
};

const YourWay = () => {
  return (
    <>
      <WayHero />
      <Steps />
    </>
  );
};

export default YourWay;
