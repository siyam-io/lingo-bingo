import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGlobe,
  FaLightbulb,
  FaChalkboardTeacher,
  FaTrophy,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      id: 1,
      icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />,
      title: "Multilingual Support",
      description:
        "Learn vocabulary in multiple languages, including Spanish, French, Japanese, and more.",
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
      title: "Interactive Lessons",
      description:
        "Engage in interactive lessons designed to help you retain vocabulary easily.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-green-600 text-4xl mb-4" />,
      title: "Expert Guidance",
      description:
        "Our tutorials are created by language experts to ensure quality and relevance.",
    },
    {
      id: 4,
      icon: <FaTrophy className="text-red-500 text-4xl mb-4" />,
      title: "Track Your Progress",
      description:
        "Monitor your learning journey and achieve milestones with our progress tracking.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-10"
        >
          Why Choose <span className="text-blue-600">Lingo Bingo</span>?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: index * 0.3 }}
               className="bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
