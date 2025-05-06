import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Phone, GraduationCap, Briefcase } from 'lucide-react';
import { aboutMe } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg text-gray-900 dark:text-white mb-4"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="heading-md text-gray-800 dark:text-gray-100 mb-6">Get to know me</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <Mail className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">{aboutMe.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-md text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
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
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.role}</h4>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-primary-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-md text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
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
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-primary-400">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
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