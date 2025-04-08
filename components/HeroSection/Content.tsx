import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { openRSVPModal } from "@/components/RSVPForm";

const Content: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://thesoda.io";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const h1Variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "easeInOut",
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1]
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1]
      } 
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    controls.start("visible");
  }, [controls, isInView]);

  const handleRSVPClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Hero RSVP button clicked");
    openRSVPModal();
  };

  return (
    <motion.div
      ref={ref}
      className="content md:mt-24 mt-4 max-w-[600px] m-auto text-center flex flex-col justify-center items-center space-y-4 md:p-4 p-5"
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
      <div className="w-full">
        <motion.div className="mb-12" variants={childVariants}>
          <motion.div variants={childVariants} className="flex justify-center">
            <img 
              src="/assets/images/innovationhacks.svg" 
              alt="Innovation Hacks 2025" 
              className="w-full max-w-[500px] h-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-8 text-white mb-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <div className="flex flex-col items-center">
                <div className="font-bold">April 19-20</div>
                <div>2025</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mt-4">
              <span>📍</span>
              <div className="flex flex-col items-center">
                <div className="font-bold">ECG + ECF</div>
                <div>eSpaces</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="space-y-4 text-white mb-8">
          <div className="text-lg">Step into ASU's most ambitious student-led hackathon</div>
          <div>
            <div>Form a team</div>
            <div>Build projects that drive real-world change in AI, education, and social impact</div>
            <div>Compete for over $5,000 in prizes</div>
          </div>
        </motion.div>
      </div>
      <motion.div className="text-md text-white mb-8">
        <CountdownTimer />
      </motion.div>
      <div className="!mt-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            onClick={handleRSVPClick}
            className="bg-[#E066FF] hover:bg-[#D15FEF] text-white py-2 px-4 md:py-3 md:px-6 rounded-md font-semibold shadow-lg transition duration-300 flex items-center justify-center"
          >
            <span>RSVP Now</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-white text-sm mt-8">
        FREE FOOD • ALL SKILL LEVELS WELCOME
      </div>
    </motion.div>
  );
};

export default Content;
