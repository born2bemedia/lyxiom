import React from "react";
import "@/styles/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ContactBlock from "@/components/ContactBlock";
import ServicesLoop from "./_components/ServicesLoop";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Brand Marketing Services | Lyxiom",
  description:
    "Get the marketing solutions you need to build, grow, and scale your brand with proven strategies. Learn how to take your business to the next level today.",
  openGraph: {
    title: "Brand Marketing Services | Lyxiom",
    description:
      "Get the marketing solutions you need to build, grow, and scale your brand with proven strategies. Learn how to take your business to the next level today.",
    images: "https://lyxiom.com/images/meta.png",
  },
};

const OurServices = async () => {
  const t = await getTranslations("services.contact");

  return (
    <>
      <ServicesHero />
      <ServicesLoop />
      <ContactBlock
        text={`${t('text.0', {fallback: "Not sure what your perfect fit is?"})} <span>${t('text.1', {fallback: "Explore our package offers!"})}</span>`}
        buttonText={t('buttonText', {fallback: "Complex Solutions"})}
        buttonLink={"/complex-solution"}
        imageUrl="/images/services/contact.webp"
      />
    </>
  );
};

export default OurServices;
