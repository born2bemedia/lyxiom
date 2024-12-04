"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestButton from "@/components/RequestButton";
import Link from "next/link";

const InnerCourseText = ({ content, postSlug, prevSlug, nextSlug }) => {
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
              <span>Back</span>
            </Link>
          )}
          <RequestButton text={"Let’s Start Your Brand"} />
          {nextSlug && (
            <Link
              href={`/branding-courses/${nextSlug}`}
              className="next-button"
            >
              <span>Next Tutorial</span>
              <img src="/images/courses/next.svg" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnerCourseText;
