import React from "react";
import "@/styles/contact.scss";
import ContactHero from "./_components/ContactHero";
import ContactForm from "./_components/ContactForm";

export const metadata = {
  title: "Contact Us | Lyxiom",
  description:
    "Do you have questions or need assistance? Contact Lyxium today for expert help with building, growing, and scaling your brand.",
  openGraph: {
    title: "Contact Us | Lyxiom",
    description:
      "Do you have questions or need assistance? Contact Lyxium today for expert help with building, growing, and scaling your brand.",
    //images: "",
  },
};

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
};

export default ContactUs;
