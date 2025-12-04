import React from "react";
import "@/styles/complex.scss";
import ComplexHero from "./_components/ComplexHero";
import ContactBlock from "@/components/ContactBlock";
import PackagesLoop from "./_components/PackagesLoop";
import OrderPopup from "@/components/OrderPopup";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Complex Solutions | Lyxiom",
  description:
    "Find the perfect solution for your brand at any stage. Explore our tailored packages for startups, growing brands, and scaling businesses, or create your custom package.",
  openGraph: {
    title: "Complex Solutions | Lyxiom",
    description:
      "Find the perfect solution for your brand at any stage. Explore our tailored packages for startups, growing brands, and scaling businesses, or create your custom package.",
    images: "https://lyxiom.com/images/meta.png",
  },
};

const ComplexSolution = () => {
  const t = useTranslations("complexSolution.contact");

  return (
    <>
      <ComplexHero />
      <PackagesLoop />
      <ContactBlock
        text={t('text', {fallback: "Need Assistance? Contact Lyxiom!"})}
        buttonText={t('buttonText', {fallback: "Contact Us"})}
        buttonLink={"/contact-us"}
        imageUrl="/images/complex/contact.png"
      />
      <OrderPopup />
    </>
  );
};

export default ComplexSolution;
