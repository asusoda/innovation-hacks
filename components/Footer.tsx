"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const SOCIALS = {
    // SoDA socials
    soda_instagram: "https://instagram.com/soda.asu",
    soda_discord: "https://discord.gg/the-software-developers-association-762811961238618122",
    soda_linkedin: "https://www.linkedin.com/company/thesoda/",
    soda_twitter: "https://x.com/asu_soda",
    soda_email: "mailto:help@innovationhacks.dev",
    soda_mail: "help@innovationhacks.dev",
    
    // GDSC socials
    gdsc_instagram: "https://www.instagram.com/asu.dsc/",
    gdsc_discord: "https://discord.gg/jE224Skdvx",
    gdsc_linkedin: "https://www.linkedin.com/company/gdsc-asu/",
    gdsc_twitter: "https://x.com/gdsc_asu",
    
    // AI Society socials
    ai_instagram: "https://www.instagram.com/theaisociety.asu/",
    ai_discord: "https://discord.gg/7r3wgNzSkG",
    ai_linkedin: "https://www.linkedin.com/company/ai-society-asu/",
    ai_twitter: "https://x.com/ai_society_asu",
  };

  return (
    <footer className=" p-4  bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5">
      <div className="flex flex-col items-center">
        {/* Organization Logos */}
        <div className="flex flex-row flex-wrap  justify-center items-center space-x-8 mb-8">
          <a href={SOCIALS.ai_discord} target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/AI_Society.png" alt="AI Society Logo" width={120} height={40} className="object-contain hover:opacity-80 transition-opacity" />
         </a>
          <a href={SOCIALS.soda_discord} target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/soda.png" alt="SoDA Logo" width={120} height={40} className="object-contain hover:opacity-80 transition-opacity" />
          </a>
          <a href={SOCIALS.gdsc_discord} target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/gdsc.svg" alt="GDSC Logo" width={120} height={40} className="object-contain hover:opacity-80 transition-opacity" />
          </a>
        </div>
        
        {/* Social media links */}
        <div className="flex flex-col items-center space-y-4 mb-9">
          <div className="flex space-x-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 mb-2">AI Society</span>
              <div className="flex space-x-4">
                <a href={SOCIALS.ai_discord} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-xl" />
                </a>
                <a href={SOCIALS.ai_instagram} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 mb-2">SoDA</span>
              <div className="flex space-x-4">
                <a href={SOCIALS.soda_discord} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-xl" />
                </a>
                <a href={SOCIALS.soda_instagram} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 mb-2">GDSC</span>
              <div className="flex space-x-4">
                <a href={SOCIALS.gdsc_discord} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-xl" />
                </a>
                <a href={SOCIALS.gdsc_instagram} className="hover:text-[#E066FF] transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="w-full justify-center">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-xs xl:text-sm">
              <a href={SOCIALS.soda_email} className="hover:text-[#E066FF] transition-colors mb-4 block">
                Contact Us
              </a>
              <div className="mx-5 lg:mx-0">
                Copyrights © 2025. All rights reserved by The Software Developers Association
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
