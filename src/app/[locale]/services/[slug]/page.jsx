import React from "react";
import "@/styles/services.scss";
import { getServices } from "@/lib/services";
import InnerSercviceHero from "../_components/InnerSercviceHero";
import ContactBlock from "@/components/ContactBlock";
import InnerServicesLoop from "../_components/InnerServicesLoop";
import OrderPopup from "@/components/OrderPopup";
import InnerServiceWhy from "../_components/InnerServiceWhy";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { slug } }) {
  const t = await getTranslations("servicesList");

  const serviceData = getServices(t).find((service) => service.link === slug);

  return {
    title: serviceData.seo_title,
    description: serviceData.seo_description,
    openGraph: {
      title: serviceData.seo_title,
      description: serviceData.seo_description,
      images: "https://lyxiom.com/images/meta.png",
    },
  };
}

const InnerService = async ({ params: { slug } }) => {
  const t = await getTranslations("servicesList");
  const tp = await getTranslations("slugContact");

  const selectedService = getServices(t).find((service) => service.link === slug);
  
  return (
    <>
      <InnerSercviceHero
        title={selectedService.category}
        subtitle={selectedService.overview.title}
        slug={slug}
      />
      <InnerServiceWhy
        highlightsText={selectedService.overview.highlightsText}
        highlights={selectedService.overview.highlights}
      />
      <InnerServicesLoop innerServices={selectedService.servicesList} />
      <ContactBlock
        text={`${tp('text.0', {fallback: "Not sure what your perfect fit is?"})} <span>${tp('text.1', {fallback: "Explore our package offers!"})}</span>`}
        buttonText={tp('buttonText', {fallback: "Complex Solutions"})}
        buttonLink={"/complex-solution"}
        imageUrl="/images/services/contact.webp"
      />
      <OrderPopup />
    </>
  );
};

export default InnerService;
