import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  BadgeCheck,
  BookOpenCheck,
} from "lucide-react";
import { folioData } from "../data";
import LanguagesIcon from "../assets/LanguageIcon.svg?react";
import BookWrite from "../assets/write.svg?react";
import Speak from "../assets/speak.svg?react";
import PopoverLink from "./PopoverLink";
import HorizontalBarGraph from "./HorizontalBarGraph";
import StepProgressBar from "./StepProgressBar/StepProgressBar";

const About: React.FC = () => {
  const { aboutMe } = folioData;
  const performanceData = [
    { label: "Design", value: 85, color: "#4285F4" },
    { label: "Development", value: 92, color: "#34A853" },
    { label: "Marketing", value: 78, color: "#FBBC05" },
    { label: "Sales", value: 65, color: "#EA4335" },
    { label: "Support", value: 88, color: "#673AB7" },
  ];

  return (
    <section id="about" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-10 lg:mb-16">
          <motion.h2
            className="heading-md lg:heading-lg text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 md:gap-8 lg:gap-10"
          >
            <h3 className="heading-sm md:heading-md lg:heading-md text-gray-800 dark:text-gray-100">
              Get to know me
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {aboutMe.bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {aboutMe.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <Mail className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {aboutMe.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {aboutMe.phone}
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 mt-4"
            >
              <h3 className="heading-sm lg:heading-md text-gray-800 dark:text-gray-100 mb-4 lg:mb-6 flex items-center gap-2">
                <LanguagesIcon className="h-6 w-6 text-primary-500" />
                Languages I speak
              </h3>
              <div className="flex flex-col justify-center mt-8 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {aboutMe.languages.map((lang, index) => (
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 items-center xl:grid-cols-2 gap-1 lg:gap-4"
                    key={index}
                  >
                    <div className="">
                      <p className="text-primary-600 dark:text-primary-300">
                        <PopoverLink url={lang.wikiUrl} pageTitle={lang.name}>
                          {lang.name}
                        </PopoverLink>
                        <span className="ml-3 text-sm text-gray-900 dark:text-gray-300 ">
                          {lang.locale}
                        </span>
                      </p>
                      <p>{lang.proficiency}</p>
                    </div>
                    <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 ">
                      <StepProgressBar
                        totalSteps={10}
                        value={Number(lang.score)}
                      />
                      <div className="flex justify-between w-1/3 gap-2">
                        <span className="flex flex-col justify-center" title="can read">
                          <BookOpenCheck className="h-5 w-5 m-d:h-3 m-d:w-3 text-primary-500" />
                          <span className="text-[8px]">Read</span>
                        </span>
                        <span className="flex flex-col justify-center" title="can write">
                          <BookWrite className="h-5 w-5 m-d:h-3 m-d:w-3 fill-primary-500" />
                          <span className="text-[8px]">Write</span>
                        </span>
                        <span className="flex flex-col justify-center" title="can speak">
                          <Speak className="m-d:h-3 m-d:w-3 h-5 w-5 fill-primary-500" />
                          <span className="text-[8px]">Speak</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-sm lg:heading-md text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary-500" />
                Experience
              </h3>
              <div className="space-y-6">
                {aboutMe.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-primary-200 dark:border-primary-800 pl-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-primary-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-sm lg:heading-md text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary-500" />
                Education
              </h3>
              <div className="space-y-6">
                {aboutMe.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-primary-200 dark:border-primary-800 pl-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-primary-400">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {edu.gpa}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
