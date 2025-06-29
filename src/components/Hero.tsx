import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronsDown, Heart } from "lucide-react";
import { folioData } from '../data';
import bohemianMan from "../assets/sukanta-black.png";
import vectorImg from "../assets/vector.svg";
import { confettiShoot } from "./ConfettiShoot";

interface HeroProps {
  scrolledToShowTitle: boolean;
}

const Hero: React.FC<HeroProps> = ({ scrolledToShowTitle }) => {
  const {aboutMe} = folioData;

  const scrollRef = useRef<HTMLDivElement>(null);  

  const handleScrollDown = ():void => {
    confettiShoot("realistic");
    // confettiShoot("pride");
    // confettiShoot();

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen min-w-2xl flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 transition-all duration-500 ease-in-out"
    >
      <div className="absolute inset-0 opacity-80 dark:opacity-20 bg-[url(src/assets/bg-strip-white.jpg)] bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_50%)]"></div>
      </div>

      <div className="container-custom z-10">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!scrolledToShowTitle && (
            <motion.span
              className="inline-flex self-start sm:ml-4 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium xl:absolute xl:top-[128px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {aboutMe.title}
            </motion.span>
          )}
          <section className="flex flex-col items-center gap-3 pt-0 pb-0 px-3 relative sm:gap-8 md:gap-15 lg:gap-20 sm:flex-col md:flex-col lg:flex-row xl:flex-row-reverse sm:px-6 md:px-8 md:pt-4 lg:pt-8">
            <div className="flex flex-col items-start gap-6 xs:gap-2 m-sm:gap-2 sm:gap-4 relative flex-1 grow">
              <motion.h1
                className="heading-lg text-gray-900 dark:text-white mb-6 xs:mb-2 m-sm:mb-2 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Hi, I'm {aboutMe.name}
                <span className="profile-headline">
                  I build mesmerizing web apps with{" "}
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 md:mb-4 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {aboutMe.bio_headline.split("\n\n")[0]}
              </motion.p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center relative w-[32rem] h-[20rem] xs:w-[15rem] xs:h-[18rem] sm:w-[22rem] sm:h-[18rem] md:w-[24rem] md:h-[20rem] lg:w-[26rem] lg:h-[20rem] xl:w-[32rem] xl:h-[20rem]">
                <img
                  className="absolute h-auto w-auto left-0"
                  alt="Vector"
                  src={vectorImg}
                />
                <img
                  className="absolute h-[18rem] w-[12rem] xs:h-[16] xs:w-[10] sm:h-[17] sm:w-[12] md:h-[18] md:w-[12] lg:h-[20] lg:w-[14] top-0"
                  alt="Bohemian man with"
                  src={bohemianMan}
                />
              </div>
            </div>
          </section>
          <motion.div
            className="flex flex-col xs:flex-row m-sm:flex-row sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="#projects"
              className="btn btn-primary flex items-center justify-center gap-2 text-sm md:text-base lg:text-lg"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-outline text-sm md:text-base lg:text-lg">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronsDown className="h-8 w-8 text-gray-400 dark:text-gray-500 hover:text-blue-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
