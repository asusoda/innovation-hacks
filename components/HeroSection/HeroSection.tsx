"use client";
import React from "react";
import Content from "./Content";
import "../../styles/hero.css";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-background w-full py-20">
      <div className="container mx-auto px-4">
        <Content />
      </div>
    </div>
  );
}
