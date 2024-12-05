import React from "react";
import "@/styles/courses.scss";
import CoursesHero from "./_components/CoursesHero";
import ContactBlock from "@/components/ContactBlock";
import CoursesLoop from "./_components/CoursesLoop";

export const metadata = {
  title: "Branding Courses | Lyxiom",
  description:
    "Learn essential branding skills with Lyxiom's free tutorials. From market research to social media growth, find actionable steps to build, grow, and scale your brand.",
  openGraph: {
    title: "Branding Courses | Lyxiom",
    description:
      "Learn essential branding skills with Lyxiom's free tutorials. From market research to social media growth, find actionable steps to build, grow, and scale your brand.",
    images: "https://lyxiom.com/images/meta.png",
  },
};

const BrandingCourses = () => {
  return (
    <>
      <CoursesHero />
      <CoursesLoop />
      <ContactBlock
        text={"Stay Ahead with Us"}
        buttonText={"Let’s Start Your Brand"}
        buttonLink={"#"}
        imageUrl="/images/complex/contact.png"
        buttonType="request"
      />
    </>
  );
};

export default BrandingCourses;
