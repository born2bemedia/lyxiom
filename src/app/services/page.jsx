import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ContactBlock from "@/components/ContactBlock";
import ServicesLoop from "./_components/ServicesLoop";

export const metadata = {
  title: "Brand Marketing Services | Lyxiom",
  description:
    "Get the marketing solutions you need to build, grow, and scale your brand with proven strategies. Learn how to take your business to the next level today.",
  openGraph: {
    title: "Brand Marketing Services | Lyxiom",
    description:
      "Get the marketing solutions you need to build, grow, and scale your brand with proven strategies. Learn how to take your business to the next level today.",
    //images: "",
  },
};

const OurServices = () => {
  return (
    <>
      <ServicesHero />
      <ServicesLoop />
      <ContactBlock
        text="Not sure what your perfect fit is? <span>Explore our package offers!</span>"
        buttonText={"Complex Solutions"}
        buttonLink={"/complex-solution"}
        imageUrl="/images/services/contact.webp"
      />
    </>
  );
};

export default OurServices;
