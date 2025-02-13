import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import whyUs from "../assets/support.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.2 } },
};

const WhyChooseLingoBingo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 px-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
          Why Lingo Bingo Stands Out?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Lingo Bingo isn't just another vocabulary app — it's your partner in
          mastering new languages, offering a gamified learning experience
          packed with unique features.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-right">
            {[
              {
                title: "Personalized Learning",
                description:
                  "Tailored lessons ensure you learn at your own pace, focusing on the words and phrases you need most.",
              },
              {
                title: "Real-Life Context",
                description:
                  "Learn when and where to use vocabulary with situational examples for confidence in real conversations.",
              },
              {
                title: "Gamified Progress",
                description:
                  "Stay motivated with badges and achievements, turning learning into a fun journey.",
              },
              {
                title: "Multi-Sensory Tools",
                description:
                  "Pronunciation guides, audio, and videos ensure you learn in the way that suits you best.",
              },
              {
                title: "Social Integration",
                description:
                  "Share milestones, compare progress, and learn with friends for a more engaging experience.",
              },
              {
                title: "Global Focus",
                description:
                  "Explore less-commonly studied languages to broaden your linguistic horizons.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <h3 className="text-xl font-bold text-blue-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className=""
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <img src={whyUs} alt="Why Choose Us" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLingoBingo;
