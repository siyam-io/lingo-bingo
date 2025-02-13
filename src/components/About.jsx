import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutus from "../assets/AboutUs.png";
import AboutLottie from "./lootie/AboutLottie";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-12 px-6" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-blue-600 mb-6"
        >
          About Lingo Bingo
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-lg mb-8"
        >
          Lingo Bingo is a next-generation vocabulary learning platform designed
          to make language learning engaging, effective, and fun. Whether you're
          exploring a new language for travel, work, or personal growth, our
          tools and resources will help you master vocabulary like never before.
        </motion.p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <AboutLottie />
          </motion.div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Our Mission",
                text: "To empower language learners worldwide by providing accessible, innovative, and gamified tools to enhance vocabulary skills and confidence.",
              },
              {
                title: "Our Vision",
                text: "To create a global community of language enthusiasts, making learning a language both an achievable goal and an enjoyable experience.",
              },
              {
                title: "Who We Are",
                text: "A team of passionate linguists, educators, and technologists committed to simplifying language learning through smart and engaging solutions.",
              },
              {
                title: "Our Approach",
                text: "Combining research-based methods with modern technology to deliver the most effective and enjoyable language learning experience.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 2.2, delay: index * 0.3 }}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-blue-500 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
