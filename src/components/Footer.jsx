import Link from "next/link";
import "@/styles/footer.scss";
import React from "react";

const Footer = () => {
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
              Building Brands That <br />
              Break Through.
            </p>
          </div>
          <div className="col-02">
            <div className="row main-menu">
              <div>
                <Link href="/services">Our Services</Link>
              </div>
              <div>
                <Link href="/complex-solution">Complex Solutions</Link>
              </div>
              <div>
                <Link href="/branding-courses">Branding Courses</Link>
              </div>
              <div>
                <Link href="/introducing-lyxiom">Introducting Lyxiom</Link>
              </div>
            </div>
            <div className="row">
              <div>
                <Link href="/terms-of-use">Terms of Use</Link>
              </div>
              <div>
                <Link href="/privacy-policy">Your Privacy</Link>
              </div>
              <div>
                <Link href="/cookie-policy">Our Cookie</Link>
              </div>
              <div>
                <Link href="/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="col-01">
            <div>
              <span>Email: </span>
              <Link href="mailto:info@lyxiom.com">info@lyxiom.com</Link>
            </div>
            <div>
              <span>Phone: </span>
              <Link href="tel:+447449702908">+447449702908</Link>
            </div>
          </div>
          <div className="col-02">
            <div>
              <span>Registered address:</span>
              <Link href="#">
                2nd Floor College House, 17 King Edwards Road, Ruislip, N14 6HF,
                London, United Kingdom
              </Link>
            </div>
            <div>
              <span>Office address:</span>
              <Link href="#">
                Office 21, 1st floor, 286 Chase Road, N14 6HF, London, United
                Kingdom
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          © {currentYear} Lyxiom LTD. All rights safeguarded. Every idea, every
          design — protected.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
