import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import team from "../assets/AboutUs.png";

const teamMembers = [
  {
    id: 1,
    name: "Sophia Lee",
    role: "Linguistic Expert",
    image: "https://via.placeholder.com/150",
    description:
      "Sophia designs engaging lessons and ensures accurate vocabulary translations.",
  },
  {
    id: 2,
    name: "Ethan Kim",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    description:
      "Ethan creates the interactive user interface, making learning enjoyable and seamless.",
  },
  {
    id: 3,
    name: "Mia Patel",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    description:
      "Mia manages the app's data flow and ensures robust server-side functionality.",
  },
  {
    id: 4,
    name: "Liam Chen",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    description:
      "Liam creates user-friendly designs that simplify language learning for all.",
  },
];

const AboutOurTeam = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.2 } },
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the passionate individuals behind Lingo Bingo. Our team is
          dedicated to making language learning interactive and fun for
          everyone.
        </p>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center"
        >

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1.5 }}
          >
            <img src={team} alt="Team" className="w-full max-w-md mx-auto" />
          </motion.div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 mt-3 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurTeam;
