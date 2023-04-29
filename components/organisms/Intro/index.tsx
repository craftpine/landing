import React from "react";
import Image from "next/image";
import heroImg from "../../../public/img/hero.png";

import ModalRoot from "@/components/_gadgets/ModalRoot";
import LOGO from "../../atoms/Logo";
import Button from "@/components/atoms/Button";
import RegisterModalContent from "../../molecules/RegisterModalContent";

const Intro = () => {
  const handleRegister = () => {
    setShow(true);
  };

  const [show, setShow] = React.useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <ModalRoot
        show={show}
        onClose={handleClose}
        title="Create your free account"
      >
        <RegisterModalContent />
      </ModalRoot>

      <div className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Build the website you want
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Astro is the all-in-one web framework designed for speed. Pull
              your content from anywhere and deploy everywhere, all powered by
              your favorite UI components and libraries.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Button className="px-8 py-4 text-lg" onClick={handleRegister}>
                Get Started
              </Button>

              <a
                href="https://github.com/craftpine/landing"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <LOGO.GitHubLogo />
                <span> View on Github</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
