import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { SkillDetails } from "../../types";

interface SubSkillsProps {
  subskills: SkillDetails[];
}
const SubSkills: React.FC<SubSkillsProps> = ({ subskills }) => {
  const constraintsRef = useRef(null);

  const getRandomDirection = () => {
    const directions = [
      { x: -100, y: -50 },
      { x: 100, y: -50 },
      { x: -100, y: 50 },
      { x: 100, y: 50 },
      { x: 0, y: -100 },
      { x: 0, y: 100 },
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <div className="flex p-2" ref={constraintsRef}>
      <div className="flex flex-wrap justify-center gap-4">
        {subskills.map((subskill, index) => {
          const direction = getRandomDirection();

          return (
            <motion.div
              key={subskill.subSkill}
              className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center gap-2"
              initial={{
                opacity: 0,
                x: direction.x,
                y: direction.y,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              drag
              dragConstraints={constraintsRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm text-gray-800 dark:text-white">
                {subskill.subSkill}
              </span>
              <span className="text-sm font-bold text-primary-500">
                {subskill.proficiency}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SubSkills;
