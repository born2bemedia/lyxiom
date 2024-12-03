import "@/styles/home.scss";
import ContactBlock from "@/components/ContactBlock";
import CtaBlock from "@/components/CtaBlock";
import Image from "next/image";
import WhatMeans from "./_components/WhatMeans";
import ResponseChallenges from "./_components/ResponseChallenges";
import HomeChanges from "./_components/HomeChanges";
import HomeHero from "./_components/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeChanges />
      <ResponseChallenges />
      <CtaBlock
        title={"Full-Cycle Complex Solutions Are Here"}
        buttonLink="/complex-solution"
        buttonText={"Explore Packages"}
        subtitle="Discover end-to-end solutions tailored to your needs, combining strategy, creativity, and technology."
      />
      <WhatMeans />
      <CtaBlock
        title={"Branding Courses"}
        buttonLink="#"
        buttonText={"Go Learning"}
        subtitle="Learn how to build, grow and scale your brand: market insights, brand packing lessons, expertly crafted strategies and more."
      />
      <ContactBlock
        text="Need Assistance? Contact Lyxiom!"
        buttonText="Contact Us"
        buttonLink="#"
        imageUrl="/images/home/contact.webp"
      />
    </>
  );
}
