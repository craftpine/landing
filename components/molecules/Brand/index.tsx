import LOGO from "@/components/atoms/Logo";
import React from "react";

export default function Brand() {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-xl text-center text-gray-700 dark:text-white">
        Trusted by <span className="text-indigo-600">2000+</span> customers
        worldwide
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-10 md:justify-around">
        <div className="pt-2 text-gray-400 dark:text-gray-400">
          <LOGO.AmazonLogo />
        </div>

        <div className="text-gray-400 dark:text-gray-400">
          <LOGO.MicrosoftLogo />
        </div>
        <div className="pt-1 text-gray-400 dark:text-gray-400">
          <LOGO.NetflixLogo />
        </div>
      </div>
    </div>
  );
}
