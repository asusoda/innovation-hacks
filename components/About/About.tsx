"use client";
import React, { useEffect } from "react";
import "@/styles/about/about.css";
import CountUp from "react-countup";
import "../../styles/about/background.css";
import { motion, useAnimation, useInView } from "framer-motion";
import "../../styles/colors.css";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="w-screen flex-col sm:px-14 md:px-40 lg:px-40 xl:px-80 mt-36 sm:mt-56">
      <h1 className="text-4xl font-bold text-center mb-8">
        What is Innovation Hacks?
      </h1>
      <div className="mt-24 flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5">
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect aboutContainer1">
          <h1 className="text-4xl my-2 font-semibold blue-logo">
            <CountUp
              start={0}
              end={6}
              duration={4}
              className="font-bold blue-logo"
              enableScrollSpy={true}
            />
            +
          </h1>
          <p className="text-slate-200">Prize categories</p>
        </div>
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect">
          <h1 className="text-4xl my-2 font-semibold text-rose-500">
            <CountUp
              start={0}
              end={30}
              duration={4}
              className="font-bold text-rose-500"
              enableScrollSpy={true}
            />
            +
          </h1>
          <p className="text-slate-200">Hours of Hacking</p>
        </div>
        <div className="basis-1/3 border-2 rounded-2xl w-full p-5 glassy-effect">
          <h1 className="text-4xl my-2 font-semibold orange-logo">
            <CountUp
              start={100}
              end={300}
              duration={4}
              enableScrollSpy={true}
              className="font-bold orange-logo"
            />
            +
          </h1>
          <p className="text-slate-200">Participants</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5 px-5 mt-5 container1 container2">
        <div className="basis-1/2 border-2 rounded-2xl sm:h-96 w-full p-5 overflow-y-scroll lg:overflow-auto glassy-effect">
          <p className="text-slate-200 text-lg sm:text-xl sm:mt-3">
            Start building projects and join us at Innovation Hacks 2025!
            <br />
            <br />
            Innovation Hacks 2025 is a 24-hour hackathon organized by The AI Society, GDSC, and the Software Developers Association at ASU.
            <br />
            <br />
            This event provides a platform for passionate developers, designers, and enthusiasts to come together and
            transform their ideas into reality.
            <br />
            <br />
            Whether you've been to tons of hackathons or you're thinking about attending your first, Innovation Hacks would love to have you.
            Join us for a weekend of learning, building, and fun!
          </p>
        </div>
        <div className="basis-1/2 border-2 h-96 rounded-2xl w-full p-4 sm:h-96 glassy-effect">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, scale: 1 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ type: "easeIn", duration: 1.2, delay: 0 }}
            className="my-5 h-52 w-full sm:h-80 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789012!2d-111.9345!3d33.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d9d8f8f8f8%3A0x1234567890abcdef!2sECG%20Building%2C%20Arizona%20State%20University!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
