import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import achivement from "../assets/pogress.png";

const SuccessCount = () => {
  const stats = [
    {
      id: 1,
      label: "Users",
      value: 1250,
      description: "People using our platform",
    },
    {
      id: 2,
      label: "Lessons",
      value: 55,
      description: "Lessons available for learning",
    },
    {
      id: 3,
      label: "Vocabulary",
      value: 2850,
      description: "Words in our vocabulary database",
    },
    {
      id: 4,
      label: "Tutorials",
      value: 10,
      description: "Interactive tutorials for learners",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="bg-blue-50 py-16" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Our Achievements
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 2.15, delay: stat.id * 0.2 }}
                className="box p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <div className="text-4xl font-extrabold text-blue-500">
                  {isInView && (
                    <CountUp end={stat.value} duration={2} useEasing={true} />
                  )}
                  +
                </div>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  {stat.label}
                </p>

                <p className="mt-1 text-base text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 3 }}
              className="object-contain mx-auto"
              src={achivement}
              alt="Visual representation of achievements"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCount;
