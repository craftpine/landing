/* eslint-disable react/no-unescaped-entities */
import CTA from "@/components/atoms/CTA";
import Footer from "@/components/atoms/Footer";
import LandingSection from "@/components/atoms/LandingSection";
import Features from "@/components/molecules/Features";
import React from "react";
import Brand from "@/components/molecules/Brand";
import Intro from "@/components/organisms/Intro";

const LandingPageView = () => {
  return (
    <>
      <Intro />

      <div className="mt-4 lg:mt-16 p-8 mx-auto xl:px-0">
        <Brand />
      </div>

      <div className="p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <LandingSection
          preTitle="Astro benefit"
          title=" Everything you need to start a website"
        >
          Astro optimizes your website like no other framework can. Leverage
          Astro's unique zero-JS frontend architecture to unlock higher
          conversion rates with better SEO.
        </LandingSection>
      </div>

      <Features />

      <CTA />

      <Footer />
    </>
  );
};

export default LandingPageView;
