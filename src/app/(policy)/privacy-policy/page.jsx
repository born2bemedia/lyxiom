import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
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

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("privacy-policy", locale);
  const pageTitle = `${page.title} | Lyxiom`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

const PrivacyPolicy = async () => {
  const page = await getPage("privacy-policy");
  return (
    <>
      <section className="policy">
        <div className="_container">
          <div className="policy__body">
            <h1 className="policy__title">{page.title}</h1>
            <article
              dangerouslySetInnerHTML={{ __html: page.body }}
              className="policy__content"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
