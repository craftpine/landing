import React from "react";
import { features } from "./mockdata";
import LandingFeature from "@/components/atoms/LandingFeature";

function Features() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16 max-w-screen-xl mx-auto md:px-5">
      {features.map((item, index) => (
        <LandingFeature {...item} key={index} />
      ))}
    </div>
  );
}

export default Features;
