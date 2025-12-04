"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import Socials from "./Socials";
import { useTranslations } from "next-intl";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);

  const t = useTranslations("header.menu");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
      console.log("test");
    } else {
      setScrolling(false);
      console.log("test1");
    }
  };

  const menuOpen = () => {
    setMenuOpened((prev) => !prev);
    setButtonActive((prev) => !prev);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setButtonActive(false);
    document.body.classList.remove("no-scroll");
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolling ? "active header" : "header"}>
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__col-01">
            <Link href="/" className="header__logo" onClick={closeMenu}>
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header__col-02">
            <LangSwitcher />
            <Socials />
            <button
              onClick={menuOpen}
              className={`header__menu-btn ${menuOpened ? "_active" : ""}`}
            >
              {!menuOpened ? (
                <img src="/images/menu-close.svg" alt="menu-burger" />
              ) : (
                <img alt="logo" src="/images/menu-open.svg" />
              )}
            </button>
          </div>

          <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
            <nav className="header__nav _container">
              <ul className="header__list">
                <li
                  className={`header__item-menu _submenu ${
                    submenuOpen["services"] || hoveredItem === "services"
                      ? "_open"
                      : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="wrapper">
                    <Link href="/services" onClick={closeMenu}>
                      {t('ourServices', {fallback: "OUR SERVICES"})}
                    </Link>
                    <button type="button" className="btn">
                      {!submenuOpen["services"] ? (
                        <img src="/images/menu-right.svg" alt="expand" />
                      ) : (
                        <img src="/images/menu-left.svg" alt="collapse" />
                      )}
                    </button>
                  </div>
                  <ul
                    className={`header__submenu ${
                      submenuOpen["services"] || hoveredItem === "services"
                        ? "_active"
                        : ""
                    }`}
                    style={{
                      maxHeight:
                        submenuOpen["services"] || hoveredItem === "services"
                          ? "1000px"
                          : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      paddingTop:
                        submenuOpen["services"] || hoveredItem === "services"
                          ? "10px"
                          : "0",
                    }}
                  >
                    <li className="header__subitem">
                      <Link href="/services/brand-design" onClick={closeMenu}>
                        {t('brandDesign', {fallback: "Brand Design"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link
                        href="/services/product-service-experience-design"
                        onClick={closeMenu}
                      >
                        {t('productServiceExperienceDesign', {fallback: "Product, Service, Experience Design"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link
                        href="/services/content-and-brand-story-design"
                        onClick={closeMenu}
                      >
                        {t('contentAndBrandStoryDesign', {fallback: "Content and Brand Story Design"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/smm" onClick={closeMenu}>
                        {t('smm', {fallback: "SMM"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/seo" onClick={closeMenu}>
                        {t('seo', {fallback: "SEO"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/performance" onClick={closeMenu}>
                        {t('performance', {fallback: "Performance (Advertising)"})}
                      </Link>
                    </li>
                    <li className="header__subitem">
                      <Link href="/services/brand-scaling" onClick={closeMenu}>
                        {t('brandScaling', {fallback: "Brand Scaling"})}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="header__item-menu">
                  <Link href="/complex-solution" onClick={closeMenu}>
                    {t('complexSolutions', {fallback: "Complex Solutions"})}
                  </Link>
                </li>
                <li className="header__item-menu">
                  <Link href="/introducing-lyxiom" onClick={closeMenu}>
                    {t('introducingLyxiom', {fallback: "Introducing Lyxiom"})}
                  </Link>
                </li>
                <li className="header__item-menu">
                  <Link href="/your-way" onClick={closeMenu}>
                    {t('yourWay', {fallback: "Your Way"})}
                  </Link>
                </li>
                <li className="header__item-menu">
                  <Link href="/branding-courses" onClick={closeMenu}>
                    {t('brandingCourses', {fallback: "Branding Courses"})}
                  </Link>
                </li>
                <li className="header__item-menu">
                  <Link href="/contact-us" onClick={closeMenu}>
                    {t('contactUs', {fallback: "Contact Us"})}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
