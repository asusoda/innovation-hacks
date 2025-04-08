"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import "@/styles/navbar.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Navbar = (activeSection: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (isOpen && event.target.closest(".nav-dropdown") === null) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, activeSection]);

  function toggleDropdown(event: any) {
    setIsOpen(!isOpen);
    if (!isOpenMenu) {
      setTimeout(() => {
        setIsOpenMenu(!isOpenMenu);
      }, 500);
    } else {
      setIsOpenMenu(!isOpenMenu);
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-white text-xl font-bold">Innovation Hacks</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-[#E066FF] transition-colors">About</a>
            <a href="#schedule" className="text-white hover:text-[#E066FF] transition-colors">Schedule</a>
            <a href="#sponsors" className="text-white hover:text-[#E066FF] transition-colors">Sponsors</a>
            <a href="#faq" className="text-white hover:text-[#E066FF] transition-colors">FAQs</a>
            <a
              href="https://thesoda.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E066FF] text-white px-6 py-2 rounded-lg hover:bg-[#D15FEF] transition-colors"
            >
              RSVP NOW
            </a>
          </div>

          <div className="md:hidden">
            {!isOpenMenu ? (
              <FaBars
                className="text-white text-2xl cursor-pointer"
                onClick={toggleDropdown}
              />
            ) : (
              <IoMdClose
                className="text-white text-3xl cursor-pointer"
                onClick={toggleDropdown}
              />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#about"
              className="block text-white hover:text-[#E066FF] transition-colors"
              onClick={toggleDropdown}
            >
              About
            </a>
            <a
              href="#schedule"
              className="block text-white hover:text-[#E066FF] transition-colors"
              onClick={toggleDropdown}
            >
              Schedule
            </a>
            <a
              href="#sponsors"
              className="block text-white hover:text-[#E066FF] transition-colors"
              onClick={toggleDropdown}
            >
              Sponsors
            </a>
            <a
              href="#faq"
              className="block text-white hover:text-[#E066FF] transition-colors"
              onClick={toggleDropdown}
            >
              FAQs
            </a>
            <a
              href="https://thesoda.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#E066FF] text-white px-6 py-2 rounded-lg hover:bg-[#D15FEF] transition-colors text-center"
              onClick={toggleDropdown}
            >
              RSVP NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
