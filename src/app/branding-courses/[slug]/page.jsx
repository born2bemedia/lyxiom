import "@/styles/courses.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";
import InnerCoursesHero from "../_components/InnerCoursesHero";
import InnerCourseText from "../_components/InnerCourseText";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: post.thumbnail,
      poster_desc: post.poster_desc,
      poster_mobile: post.poster_mobile,
      back_desc: post.back_desc,
      back_mobile: post.back_mobile,
    },
  };
}

const BlogSingle = async ({ params: { slug, locale } }) => {
  const post = await getPost(slug, locale);
  const slugs = await getSlugs();
  const currentIndex = slugs.indexOf(slug);

  const prevSlug =
    slugs.length > 0
      ? slugs[(currentIndex - 1 + slugs.length) % slugs.length] // Cycles to the last slug if currentIndex is 0
      : null;

  const nextSlug =
    slugs.length > 0
      ? slugs[(currentIndex + 1) % slugs.length] // Cycles to the first slug if currentIndex is the last
      : null;

  return (
    <>
      <InnerCoursesHero title={post.title} />
      <InnerCourseText
        content={post.body}
        postSlug={slug}
        prevSlug={prevSlug}
        nextSlug={nextSlug}
      />
    </>
  );
};

export default BlogSingle;