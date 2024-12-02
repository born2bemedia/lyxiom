"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import usePopupStore from "@/stores/popupStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckboxIcon from "@/icons/CheckboxIcon";
import MainButton from "./MainButton";
import Link from "next/link";

function OrderPopup() {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } =
    usePopupStore();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please provide a valid email address")
      .required("This field is required"),
    phone: Yup.string().required("This field is required"),
    activity: Yup.string().required("This field is required"),
    socialMediaLink: Yup.string(),
    agree: Yup.boolean()
      .oneOf([true], "This field is required")
      .required("This field is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    activity: "",
    socialMediaLink: "",
    message: "",
    agree: false,
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setStatus({ success: true });
    }, 400);
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, resetForm, setFieldValue }) => (
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
                        <h2>{serviceValue} Order</h2>

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

                        <div>
                          <Field
                            name="activity"
                            type="text"
                            placeholder="Activity"
                            className="field"
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
                            placeholder="Social Media Link"
                            className="field"
                          />
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            type="text"
                            placeholder="Your Message"
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
                              I agree to be contacted by Lyxiom in accordance
                              with the Privacy Policy.
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
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default OrderPopup;
