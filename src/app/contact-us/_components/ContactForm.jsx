"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePopupStore from "@/stores/popupStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Link from "next/link";

const ContactForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please provide a valid email address")
      .required("This field is required"),
    phone: Yup.string().required("This field is required"),
    agree: Yup.boolean()
      .oneOf([true], "This field is required")
      .required("This field is required"),
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
  return (
    <section className="contact-form">
      <div className="_container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status, resetForm, setFieldValue }) => (
            <div className="form-wrap">
              <Form>
                {!status && (
                  <div className="form-inner">
                    <h2>How Can We Help You?</h2>

                    <div>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="field"
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
                        placeholder="Last Name"
                        className="field"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <PhoneInput
                        country={"us"}
                        placeholder="Phone"
                        onChange={(phone) => setFieldValue("phone", phone)}
                        className="field"
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
                        placeholder="Email"
                        className="field"
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
                        placeholder="Your inquiry"
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
                          I agree to be contacted by Lyxiom in accordance with
                          the Privacy Policy.
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
                      <span>Request</span>
                    </button>
                  </div>
                )}
                {status && status.success && (
                  <div className="success">
                    <h3>Submission successful!</h3>
                    <p>
                      We’ll review your order and get back to you soon.
                      <br />
                      Thank you for choosing Lyxiom!
                    </p>
                    <Link href="/">OK</Link>
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
