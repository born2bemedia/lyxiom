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
            <div className="row">
              <div>
                <span>Email:</span>
                <Link href="#">email</Link>
              </div>
              <div>
                <span>Phone:</span>
                <Link href="#">phone</Link>
              </div>
              <div>
                <span>
                  <Link href="#">Correspondence</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link href="#">Registered</Link>
                </span>
              </div>
            </div>
            <div className="row main-menu">
              <div>
                <Link href="/services">Our Services</Link>
              </div>
              <div>
                <Link href="#">Complex Solutions</Link>
              </div>
              <div>
                <Link href="#">Branding Courses</Link>
              </div>
              <div>
                <Link href="#">Introducting Lyxiom</Link>
              </div>
            </div>
            <div className="row">
              <div>
                <Link href="#">Terms of Use</Link>
              </div>
              <div>
                <Link href="#">Your Privacy</Link>
              </div>
              <div>
                <Link href="#">Our Cookie</Link>
              </div>
              <div>
                <Link href="#">Refund Policy</Link>
              </div>
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
