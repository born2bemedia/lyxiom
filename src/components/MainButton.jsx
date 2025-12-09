import { Link } from "@/i18n/navigation";
import ButtonArrow from "@/icons/ButtonArrow";
import React from "react";

const MainButton = ({ text, link }) => {
  return (
    <Link href={link} className="main-button">
      <span className="text">
        <span>
          <span>{text}</span>
          <span>{text}</span>
        </span>
      </span>
      <span className="arrow">
        <span>
          <span>
            <ButtonArrow />
          </span>
          <span>
            <ButtonArrow />
          </span>
        </span>
      </span>
    </Link>
  );
};

export default MainButton;
