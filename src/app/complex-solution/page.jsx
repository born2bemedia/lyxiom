import React from "react";
import "@/styles/complex.scss";
import ComplexHero from "./_components/ComplexHero";
import ContactBlock from "@/components/ContactBlock";
import PackagesLoop from "./_components/PackagesLoop";
import OrderPopup from "@/components/OrderPopup";

export const metadata = {
  title: "Complex Solutions | Lyxiom",
  description:
    "Find the perfect solution for your brand at any stage. Explore our tailored packages for startups, growing brands, and scaling businesses, or create your custom package.",
  openGraph: {
    title: "Complex Solutions | Lyxiom",
    description:
      "Find the perfect solution for your brand at any stage. Explore our tailored packages for startups, growing brands, and scaling businesses, or create your custom package.",
    //images: "",
  },
};

const ComplexSolution = () => {
  return (
    <>
      <ComplexHero />
      <PackagesLoop />
      <ContactBlock
        text={"Need Assistance? Contact Lyxiom!"}
        buttonText={"Contact Us"}
        buttonLink={"#"}
        imageUrl="/images/complex/contact.png"
      />
      <OrderPopup />
    </>
  );
};

export default ComplexSolution;
