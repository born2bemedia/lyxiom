"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePopupStore from "@/stores/popupStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Link from "next/link";
import useCountryCode from "@/utils/useCountryCode";
import { excludedCountries } from "@/utils/countries";
import { useTranslations } from "next-intl";

function RequestPopup() {
  const countryCode = useCountryCode();
  const { requestPopupDisplay, setRequestPopupDisplay } = usePopupStore();

  const t = useTranslations("requestPopup");

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    lastName: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    email: Yup.string()
      .email(t("errors.email", {fallback: "Please provide a valid email address"}))
      .required(t("errors.required", {fallback: "This field is required"})),
    phone: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    activity: Yup.string().required(t("errors.required", {fallback: "This field is required"})),
    socialMediaLink: Yup.string(),
    agree: Yup.boolean()
      .oneOf([true], t("errors.required", {fallback: "This field is required"}))
      .required(t("errors.required", {fallback: "This field is required"})),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    activity: "",
    socialMediaLink: "",
    goal: "",
    need: "",
    message: "",
    agree: false,
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/request", {
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

  return (
    <div className={`order-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}>
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
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner-wrap">
              <div className="popup-inner">
                <svg
                  className="popup-close"
                  onClick={() => closePopup(resetForm)}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M5 19L12 12M12 12L19 5M12 12L5 5M12 12L19 19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>

                <div className="form-wrap">
                  <Form>
                    {!status && (
                      <div className="form-inner">
                        <h2>{t('title', {fallback: "LET'S START YOUR BRAND"})}</h2>

                        <div>
                          <Field
                            name="firstName"
                            type="text"
                            placeholder={t('fields.firstName', {fallback: "First Name"})}
                            className={
                              touched.firstName && errors.firstName
                                ? "invalid"
                                : ""
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
                              touched.lastName && errors.lastName
                                ? "invalid"
                                : ""
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

                        <div>
                          <Field
                            name="activity"
                            type="text"
                            placeholder={t('fields.activity', {fallback: "Activity"})}
                            className={
                              touched.activity && errors.activity
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="activity"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="socialMediaLink"
                            type="text"
                            placeholder={t('fields.socialMediaLink', {fallback: "Social Media Link"})}
                            className="field"
                          />
                        </div>

                        <div className="check-wrap">
                          <h5>{t('yourGoal', {fallback: "Your Goal:"})}</h5>
                          <div className="checkboxes">
                            <label>
                              <Field name="goal" type="radio" value="Start" />
                              <CheckboxIcon />
                              <span>{t('start', {fallback: "Start"})}</span>
                            </label>
                            <label>
                              <Field name="goal" type="radio" value="Growth" />
                              <CheckboxIcon />
                              <span>{t('growth', {fallback: "Growth"})}</span>
                            </label>
                            <label>
                              <Field name="goal" type="radio" value="Scale" />
                              <CheckboxIcon />
                              <span>{t('scale', {fallback: "Scale"})}</span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="goal"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="check-wrap">
                          <h5>{t('iNeed', {fallback: "I need:"})}</h5>
                          <div className="checkboxes">
                            <label>
                              <Field
                                name="need"
                                type="radio"
                                value="Complex Approach"
                              />
                              <CheckboxIcon />
                              <span>{t('complexApproach', {fallback: "Complex Approach"})}</span>
                            </label>
                            <label>
                              <Field
                                name="need"
                                type="radio"
                                value="Specific Solution"
                              />
                              <CheckboxIcon />
                              <span>{t('specificSolution', {fallback: "Specific Solution"})}</span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="need"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            type="text"
                            placeholder={t('fields.message', {fallback: "Your Message"})}
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
                              {t('privacyPolicy', {fallback: "I agree to be contacted by Lyxiom in accordance with the Privacy Policy."})}
                            </span>
                          </label>
                          <ErrorMessage
                            name="agree"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="order-button"
                          disabled={isSubmitting}
                        >
                          <span>{t('request', {fallback: "Request"})}</span>
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>{t('success.title', {fallback: "Submission successful!"})}</h3>
                        <p>
                          {t('success.description.0', {fallback: "We’ll review your request and get back to you soon."})}
                          <br />
                          {t('success.description.1', {fallback: "Thank you for choosing Lyxiom!"})}
                        </p>
                        <button
                          className="main-button"
                          onClick={() => closePopup(resetForm)}
                        >
                          {t('success.button', {fallback: "OK"})}
                        </button>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestPopup;
