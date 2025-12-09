"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestButton from "@/components/RequestButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

const InnerCourseText = ({ content, postSlug, prevSlug, nextSlug }) => {
  const t = useTranslations("brandingCoursedSlug");

  return (
    <section className="article-main">
      <div className=" _container">
        <div
          className="article-main__body"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="article-main__bottom">
          {prevSlug && (
            <Link
              href={`/branding-courses/${prevSlug}`}
              className="prev-button"
            >
              <img src="/images/courses/prev.svg" />
              <span>{t('back', {fallback: "Back"})}</span>
            </Link>
          )}
          <RequestButton text={t('request', {fallback: "Let’s Start Your Brand"})} />
          {nextSlug && (
            <Link
              href={`/branding-courses/${nextSlug}`}
              className="next-button"
            >
              <span>{t('next', {fallback: "Next Tutorial"})}</span>
              <img src="/images/courses/next.svg" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnerCourseText;
