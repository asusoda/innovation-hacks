import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

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
        type: "easeIn",
        duration: 1.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
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

  return (
    <motion.div
      ref={ref}
      className="content md:mt-24 mt-4 max-w-[600px] m-auto text-center flex flex-col justify-center items-center space-y-4 md:p-4 p-5"
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
      <div className="w-full">
        <motion.div variants={childVariants} animate="visible" className="mb-8">
          <div className="text-xs md:text-sm text-[#E066FF] mb-2 font-medium">
            The Ultimate Hackathon Brought to You By
          </div>
          <div className="flex justify-center items-center space-x-4 text-[#E066FF]">
            <span>THE AI SOCIETY</span>
            <span>X</span>
            <span>GDSC</span>
            <span>X</span>
            <span>SoDA</span>
          </div>
        </motion.div>
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
        <a
          href="https://thesoda.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#E066FF] text-white font-bold rounded-lg hover:bg-[#D15FEF] transition-colors duration-300"
        >
          RSVP NOW
        </a>
      </div>
      <div className="text-white text-sm mt-8">
        FREE FOOD • ALL SKILL LEVELS WELCOME
      </div>
    </motion.div>
  );
};

export default Content;
