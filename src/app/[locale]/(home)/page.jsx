import "@/styles/home.scss";
import ContactBlock from "@/components/ContactBlock";
import CtaBlock from "@/components/CtaBlock";
import Image from "next/image";
import WhatMeans from "./_components/WhatMeans";
import ResponseChallenges from "./_components/ResponseChallenges";
import HomeChanges from "./_components/HomeChanges";
import HomeHero from "./_components/HomeHero";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <>
      <HomeHero />
      <HomeChanges />
      <ResponseChallenges />
      <CtaBlock
        title={t('cta1.title', {fallback: "Full-Cycle Complex Solutions Are Here"})}
        buttonLink="/complex-solution"
        buttonText={t('cta1.button', {fallback: "Explore Packages"})}
        subtitle={t('cta1.subtitle', {fallback: "Discover end-to-end solutions tailored to your needs, combining strategy, creativity, and technology."})}
      />
      <WhatMeans />
      <CtaBlock
        title={t('cta2.title', {fallback: "Branding Courses"})}
        buttonLink="/branding-courses"
        buttonText={t('cta2.button', {fallback: "Go Learning"})}
        subtitle={t('cta2.subtitle', {fallback: "Learn how to build, grow and scale your brand: market insights, brand packing lessons, expertly crafted strategies and more."})}
      />
      <ContactBlock
        text={t('contact.text', {fallback: "Need Assistance? Contact Lyxiom!"})}
        buttonText={t('contact.buttonText', {fallback: "Contact Us"})}
        buttonLink="/contact-us"
        imageUrl="/images/home/contact.webp"
      />
    </>
  );
}
