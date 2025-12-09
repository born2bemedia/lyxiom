import Link from "next/link";
import "@/styles/footer.scss";
import React from "react";
import Socials from "./Socials";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__body">
          <div className="col-01">
            <Link href="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <p>
              {t('description.0', {fallback: "Building Brands That"})}<br />
              {t('description.1', {fallback: "Break Through."})}
            </p>
            <Socials />
          </div>
          <div className="col-02">
            <div className="row main-menu">
              <div>
                <Link href="/services">{t('menu.ourServices', {fallback: "Our Services"})}</Link>
              </div>
              <div>
                <Link href="/complex-solution">{t('menu.complexSolutions', {fallback: "Complex Solutions"})}</Link>
              </div>
              <div>
                <Link href="/branding-courses">{t('menu.brandingCourses', {fallback: "Branding Courses"})}</Link>
              </div>
              <div>
                <Link href="/introducing-lyxiom">{t('menu.introducingLyxiom', {fallback: "Introducting Lyxiom"})}</Link>
              </div>
            </div>
            <div className="row">
              <div>
                <Link href="/terms-of-use">{t('menu.termsOfUse', {fallback: "Terms of Use"})}</Link>
              </div>
              <div>
                <Link href="/privacy-policy">{t('menu.yourPrivacy', {fallback: "Your Privacy"})}</Link>
              </div>
              <div>
                <Link href="/cookie-policy">{t('menu.ourCookie', {fallback: "Our Cookie"})}</Link>
              </div>
              <div>
                <Link href="/refund-policy">{t('menu.refundPolicy', {fallback: "Refund Policy"})}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="col-01">
            <div>
              <span>{t('email', {fallback: "Email:"})}{' '}</span>
              <Link href="mailto:info@lyxiom.com">info@lyxiom.com</Link>
            </div>
            <div>
              <span>{t('phone', {fallback: "Phone:"})}{' '}</span>
              <Link href="tel:+447460102445">+447460102445</Link>
            </div>
          </div>
          <div className="col-02">
            <div>
              <span>{t('registeredAddress', {fallback: "Registered address:"})}{' '}</span>
              <Link href="#">
                2nd Floor College House, 17 King Edwards Road, Ruislip, HA4 7AE,
                London, United Kingdom
              </Link>
            </div>
            <div>
              <span>{t('officeAddress', {fallback: "Office address:"})}{' '}</span>
              <Link href="#">
                Office 21, 1st floor, 286 Chase Road, N14 6HF, London, United
                Kingdom
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          © {currentYear} Lyxiom LTD. {t('copyright', {fallback: "All rights safeguarded. Every idea, every design — protected."})}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
