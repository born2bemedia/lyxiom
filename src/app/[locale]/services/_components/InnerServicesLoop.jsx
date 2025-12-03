"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import MainButton from "@/components/MainButton";
import OrderButton from "@/components/OrderButton";

const InnerServicesLoop = ({ innerServices }) => {
  return (
    <section className="services-loop">
      <div className="_container">
        <div className="services-loop__body">
          {innerServices.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              <span className="number">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <OrderButton text={"Order Now"} serviceName={service.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnerServicesLoop;
