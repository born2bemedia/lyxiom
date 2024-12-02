import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ContactBlock from "@/components/ContactBlock";
import ServicesLoop from "./_components/ServicesLoop";

const OurServices = () => {
  return (
    <>
      <ServicesHero />
      <ServicesLoop />
      <ContactBlock
        text="Not sure what your perfect fit is? <span>Explore our package offers!</span>"
        buttonText={"Complex Solutions"}
        buttonLink={"#"}
        imageUrl="/images/services/contact.webp"
      />
    </>
  );
};

export default OurServices;
