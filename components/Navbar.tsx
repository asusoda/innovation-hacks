"use client";
import React, { useRef, useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { GrMenu, GrClose } from "react-icons/gr";
import "@/styles/navbar.css";
import Image from "next/image";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar  py-4 px-8  fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black bg-opacity-10 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <a href="#hero" className="text-white text-2xl font-bold">
            Innovation Hacks
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <a
            href="#about"
            className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
              activeSection === "about" ? "text-[#E066FF]" : ""
            }`}
          >
            About
          </a>
          <a
            href="#schedule"
            className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
              activeSection === "schedule" ? "text-[#E066FF]" : ""
            }`}
          >
            Schedule
          </a>
          <a
            href="#sponsors"
            className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
              activeSection === "sponsors" ? "text-[#E066FF]" : ""
            }`}
          >
            Sponsors
          </a>
          <a
            href="#faq"
            className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
              activeSection === "faq" ? "text-[#E066FF]" : ""
            }`}
          >
            FAQs
          </a>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="text-white"
          >
            {isOpenMenu ? (
              <GrClose className="text-2xl" />
            ) : (
              <GrMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="block md:hidden bg-black  bg-opacity-20 mt-8 py-4"
          >
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="#about"
                className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
                  activeSection === "about" ? "text-[#E066FF]" : ""
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                About
              </a>
              <a
                href="#schedule"
                className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
                  activeSection === "schedule" ? "text-[#E066FF]" : ""
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                Schedule
              </a>
              <a
                href="#sponsors"
                className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
                  activeSection === "sponsors" ? "text-[#E066FF]" : ""
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                Sponsors
              </a>
              <a
                href="#faq"
                className={`text-white hover:text-[#E066FF] transition-colors duration-300 ${
                  activeSection === "faq" ? "text-[#E066FF]" : ""
                }`}
                onClick={() => setIsOpenMenu(false)}
              >
                FAQs
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
