import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";
import usePopupStore from "@/stores/popupStore";

const OrderButton = ({ text, serviceName }) => {
  const { setOrderPopupDisplay, setServiceValue } = usePopupStore();

  const handlePopup = () => {
    setServiceValue(serviceName);
    setOrderPopupDisplay(true);
  };
  return (
    <button className="main-button" onClick={handlePopup}>
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
    </button>
  );
};

export default OrderButton;
