import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { openRSVPModal } from "@/components/RSVPForm";
import Image from "next/image";

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
      className="min-h-screen  justify-center flex-grow h-auto items-center md:px-36 px-8 md:gap-x-8 gap-y-8  gradient-background w-full  flex flex-col  md:flex-row  "
      initial="hidden"
      animate="visible"
      variants={h1Variants}
    >
            <Image
            width={250}
            height={250}
              src="/assets/images/innovationhacks.svg" 
              alt="Innovation Hacks 2025" 
              className="flex flex-col md:w-1/2 w-full "
            />
        {/* <motion.div className="flex flex-col w-full h-full"  variants={childVariants}>
        </motion.div> */}
      <motion.div className="flex flex-col w-full h-full gap-y-2 justify-between ">

        <motion.div className="flex flex-col w-full justify-between   gap-2  text-white ">
          <motion.div className="flex text-left flex-col glassy-effect  px-5  py-4 rounded-3xl  w-full  text-2xl   md:text-7xl ">
            
                <h1 className="font-bold text-left ">April 19-20</h1>
            
          </motion.div>
          
          <div className="flex text-left flex-col  glassy-effect  px-5  py-4 rounded-3xl  w-full     text-2xl   md:text-7xl ">
            
                <h1 className="font-bold  ">ECG + ECF</h1>
            
          </div>
          

        </motion.div>
        {/* <motion.div className="space-y-4 text-white mb-8">
          <div className="text-lg">Step into ASU's most ambitious student-led hackathon</div>
          <div>
            <div>Form a team</div>
            <div>Build projects that drive real-world change in AI, education, and social impact</div>
            <div>Compete for over $5,000 in prizes</div>
          </div>
        </motion.div> */}
      <motion.div className="flex flex-col justce  w-full   space-y-4 ">
        <CountdownTimer />
        <div className="flex flex-col  md:flex-row gap-4 md:gap-6">
          <button
            onClick={handleRSVPClick}
            className="bg-[#E066FF] w-full  hover:bg-[#D15FEF] text-white py-2 px-4 md:py-3 md:px-6 rounded-2xl font-semibold shadow-lg transition duration-300 flex items-center "
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
      </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Content;
