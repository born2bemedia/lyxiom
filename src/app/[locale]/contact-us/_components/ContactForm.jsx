"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePopupStore from "@/stores/popupStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Link from "next/link";
import useCountryCode from "@/utils/useCountryCode";
import { excludedCountries } from "@/utils/countries";
import ReCaptcha from "react-google-recaptcha";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const t = useTranslations("contact.form");

  const countryCode = useCountryCode();
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    lastName: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    email: Yup.string()
      .email(t("errors.invalidEmail", {fallback: "Please provide a valid email address"}))
      .required(t("errors.required", {fallback: "This field is required"})),
    phone: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    agree: Yup.boolean()
      .oneOf([true], t("errors.required", {fallback: "This field is required"}))
      .required(t("errors.required", {fallback: "This field is required"})),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
    agree: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      //console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  const handleCaptchaChange = (token) => {
    setIsCaptchaVerified(!!token);
  };

  return (
    <section className="contact-form">
      <div className="_container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            status,
            resetForm,
            setFieldValue,
            touched,
            errors,
          }) => (
            <div className="form-wrap">
              <Form>
                {!status && (
                  <div className="form-inner">
                    <h2>{t('title', {fallback: "How Can We Help You?"})}</h2>

                    <div>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder={t('fields.firstName', {fallback: "First Name"})}
                        className={
                          touched.firstName && errors.firstName ? "invalid" : ""
                        }
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder={t('fields.lastName', {fallback: "Last Name"})}
                        className={
                          touched.lastName && errors.lastName ? "invalid" : ""
                        }
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <PhoneInput
                        country={countryCode}
                        excludeCountries={excludedCountries}
                        placeholder={t('fields.phone', {fallback: "Phone"})}
                        onChange={(phone) => setFieldValue("phone", phone)}
                        className={
                          touched.phone && errors.phone ? "invalid" : ""
                        }
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder={t('fields.email', {fallback: "Email"})}
                        className={
                          touched.email && errors.email ? "invalid" : ""
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="full">
                      <Field
                        name="inquiry"
                        type="text"
                        placeholder={t('fields.inquiry', {fallback: "Your inquiry"})}
                        className="field"
                      />
                    </div>

                    <div className="checkbox">
                      <label>
                        <Field
                          name="agree"
                          type="checkbox"
                          className="checkbox"
                        />
                        <CheckboxIcon />
                        <span>
                          {t('fields.privacyPolicy', {fallback: "I agree to be contacted by Lyxiom in accordance with the Privacy Policy."})}
                        </span>
                      </label>
                      <ErrorMessage
                        name="agree"
                        component="div"
                        className="error"
                      />
                    </div>
                    <ReCaptcha
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={handleCaptchaChange}
                    />
                    <button
                      type="submit"
                      className="order-button"
                      disabled={isSubmitting || !isCaptchaVerified}
                    >
                      <span>{t('buttonText', {fallback: "Request"})}</span>
                    </button>
                  </div>
                )}
                {status && status.success && (
                  <div className="success">
                    <h3>{t('success.title', {fallback: "Submission successful!"})}</h3>
                    <p>
                      {t('success.description.0', {fallback: "We’ll review your order and get back to you soon."})}
                      <br />
                      {t('success.description.1', {fallback: "Thank you for choosing Lyxiom!"})}
                    </p>
                    <Link href="/contact-us">{t('success.button', {fallback: "OK"})}</Link>
                  </div>
                )}
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
