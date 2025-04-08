"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://instagram.com/soda.asu",
    discord: "https://discord.gg/the-software-developers-association-762811961238618122",
    linkedin: "https://www.linkedin.com/company/thesoda/",
    twitter: "https://x.com/asu_soda",
    email: "mailto:asu@thesoda.io",
    mail: "asu@thesoda.io",
  };

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-2 lg:pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col items-center">
        {/* Organization Logos */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <Image src="/assets/images/AI_Society.png" alt="AI Society Logo" width={120} height={40} className="object-contain" />
          <Image src="/assets/images/soda.png" alt="SoDA Logo" width={120} height={40} className="object-contain" />
          <Image src="/assets/images/gdsc.png" alt="GDSC Logo" width={120} height={40} className="object-contain" />
        </div>
        
        {/* Social media logos */}
        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href={SOCIALS.discord} className="hover:text-[#E066FF] transition-colors">
            <span className="sr-only">Discord</span>
            <FaDiscord />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.twitter} className="hover:text-[#E066FF] transition-colors">
            <span className="sr-only">Twitter</span>
            <FaXTwitter />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.linkedin} className="hover:text-[#E066FF] transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href="https://www.youtube.com/@ASUSoDAYoutube" className="hover:text-[#E066FF] transition-colors">
            <span className="sr-only">YouTube</span>
            <FaYoutube />
          </a>
          <div className="border-r-2 transform rotate-12" />
          <a href={SOCIALS.instagram} className="hover:text-[#E066FF] transition-colors">
            <span className="sr-only">Instagram</span>
            <FaInstagram />
          </a>
        </div>

        {/* Footer content */}
        <div className="w-full justify-center">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 xl:gap-x-36 text-xs xl:text-sm">
              <a href={SOCIALS.email} className="hover:text-[#E066FF] transition-colors">
                Contact Us
              </a>
              <div className="mx-5 lg:mx-0">
                Copyrights © 2024. All rights reserved by The Software Developers Association
              </div>
              <a href={SOCIALS.discord} target="_blank" rel="noreferrer" className="hover:text-[#E066FF] transition-colors">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
