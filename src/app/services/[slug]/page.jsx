import React from "react";
import "@/styles/services.scss";
import services from "@/lib/services";
import InnerSercviceHero from "../_components/InnerSercviceHero";
import ContactBlock from "@/components/ContactBlock";
import InnerServicesLoop from "../_components/InnerServicesLoop";
import OrderPopup from "@/components/OrderPopup";
import InnerServiceWhy from "../_components/InnerServiceWhy";

export async function generateMetadata({ params: { slug } }) {
  const serviceData = services.find((service) => service.link === slug);

  return {
    title: serviceData.seo_title,
    description: serviceData.seo_description,
    openGraph: {
      title: serviceData.seo_title,
      description: serviceData.seo_description,
      //images: "",
    },
  };
}

const InnerService = ({ params: { slug } }) => {
  const selectedService = services.find((service) => service.link === slug);
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
        text="Not sure what your perfect fit is? <span>Explore our package offers!</span>"
        buttonText={"Complex Solutions"}
        buttonLink={"/complex-solution"}
        imageUrl="/images/services/contact.webp"
      />
      <OrderPopup />
    </>
  );
};

export default InnerService;
