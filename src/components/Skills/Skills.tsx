import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { folioData } from "../../data";
import "./Skills.scss";
import SubSkills from "./SubSkills";
import SkillIcon from "./SkillIcon";
import { Quote } from "lucide-react";
import { Skill } from "../../types";

const Skills: React.FC = () => {
  const { skills } = folioData;
  const [filter, setFilter] = useState<string>("all");
  const [activeSkills, setActiveSkills] = useState(skills);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    // { value: "design", label: "Design" },
    { value: "other", label: "Other" },
  ];

  useEffect(() => {
    if (filter === "all") {
      setActiveSkills(skills);
    } else {
      setActiveSkills(skills.filter((skill) => skill.category === filter));
    }
    setExpandedIndex(null);
  }, [filter]);

  const handleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getOverallProficiency = (skill: Skill) => {
    if (!skill.subskills || skill.subskills.length === 0)
      return skill.proficiency || 0;
    const total = skill.subskills.reduce(
      (sum, sub) => sum + (sub.proficiency || 0),
      0
    );
    return Math.round(total / skill.subskills.length);
  };

  return (
    <section id="skills" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-lg text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Here are the technologies and tools I've worked with. I'm constantly
            learning and adding new skills to my repertoire.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category.value
                  ? "bg-primary-500 text-white"
                  : "bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600"
              }`}
              aria-label={`Category ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 xl:gap-10 w-11/12 sm:w-[28rem] md:w-[38rem] lg:w-[52rem] xl:w-[60rem] 2xl:w-[100rem] mx-auto">
          {activeSkills.map((skill, index) => {
            const _overallProficiency = getOverallProficiency(skill);
            return (
              <motion.div
                key={skill.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <h3 className="cursor-pointer text-sm m-sm:text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    <button
                      type="button"
                      onClick={() => handleAccordion(index)}
                      className="focus:outline-none bg-transparent border-none p-0 m-0 text-inherit flex items-center gap-2"
                      aria-label={`Toggle details for ${skill.name}`}
                    >
                      <SkillIcon
                        name={skill.icon ?? ""}
                        className="size-6 xl:size-7"
                      />
                      {skill.name}
                    </button>
                  </h3>
                  <span className="flex gap-5">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {_overallProficiency}%
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 cursor-pointer hover:text-primary-500 dark:hover:text-primary-400 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => handleAccordion(index)}
                      xlinkTitle={`click to ${expandedIndex === index ? "collapse" : "expand "} ${skill.name} skill details`}
                      aria-label={`click to ${expandedIndex === index ? "collapse" : "expand "} ${skill.name} skill details`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${_overallProficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  />
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 overflow-hidden"
                    >
                      {skill.description && (
                        <p className="text-gray-500 text-xs/4 italic p-2 mt-2 bg-gray-100 rounded-md">
                          <Quote className="h-6 w-6" />
                          {skill.description}
                        </p>
                      )}
                      <div className="py-4 skill-chip">
                        <SubSkills subskills={skill.subskills ?? []} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
