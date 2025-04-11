"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface props {
  children: JSX.Element;
  width?: "fit-content" | "full";
  even?: boolean;
}

export default function Reveal({ children , even=false }: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  // const card: Variants = {
  //   offscreen: {
  //     opacity: 0,
  //     y: 300,
  //     x: even ? -100 : 100,
  //   },
  //   onscreen: {
  //     opacity: 1,
  //     y: 50,
  //     x: 0 ,
  //     // rotate: even ? 7 : -7,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 1.2,
  //     },
  //   },
  // };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      style={{ position: "relative" }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        ref={ref}
        className="md:mt-0 mt-24"
        variants={{
          hidden: { opacity: 0, x: even ? -100 : 100 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
