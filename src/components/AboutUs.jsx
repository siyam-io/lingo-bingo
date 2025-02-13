import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-indigo-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          The mission of Lingo Bingo is to provide an interactive and engaging
          platform for users to expand their vocabulary and improve their
          communication skills in a foreign language.
        </p>
      </motion.header>

      {/* About Me Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          About the Developer
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Hi, I'm Esthiyak Ahmmed Siyam!</h3>
          <p className="text-gray-600">
            I'm a passionate web developer with a focus on creating interactive
            and responsive web applications. I specialize in frontend development
            using React, HTML, CSS, and JavaScript, with experience in backend
            development and database management. My goal is to build user-centric
            platforms that offer great experiences and meaningful interactions.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Other Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[ 
            {
              title: "GadgetHeaven - E-commerce Platform",
              description:
                "An interactive and responsive e-commerce platform to buy gadgets, with features like a shopping cart, wishlist, product filtering, and sorting.",
              color: "indigo",
            },
            {
              title: "Visa Navigator - Visa Assistance Portal",
              description:
                "A user-friendly portal designed to simplify visa requirements, applications, and tracking, with advanced search, filter, and authentication features.",
              color: "pink",
            },
            {
              title: "Lingo Bingo - Vocabulary Learning App",
              description:
                "An interactive language learning platform that helps users expand their vocabulary in foreign languages with lessons, quizzes, and speech synthesis.",
              color: "blue",
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group bg-white rounded-2xl shadow-lg p-6 border-t-4 border-${card.color}-400 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <h3
                className={`text-2xl font-semibold text-${card.color}-600 mb-3 group-hover:text-${card.color}-700 transition-colors duration-300`}
              >
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Key Skills
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            "React", "JavaScript (ES6+)", "CSS (Tailwind, SASS)", "HTML5", "Node.js", "MongoDB", "Firebase", "Git & GitHub", "Responsive Design", "API Integration"
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 group-hover:text-indigo-700 mb-3">
                {skill}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-lg text-gray-800 font-medium">
          Start learning today and take your language skills to the next level
          with <span className="text-indigo-600 font-bold">Lingo Bingo</span>!
        </p>
      </motion.footer>
    </div>
  );
};

export default AboutUs;
