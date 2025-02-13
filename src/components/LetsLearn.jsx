// LetsLearn.jsx
import React from "react";
import Lessons from "./Lessons";
import { Link } from "react-router-dom";

const LetsLearn = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Let’s Learn Vocabulary
        </h1>
        {/* Content */}
        <div className="text-center text-gray-700">
          <p className="text-lg">
            Explore lessons and tutorials to expand your vocabulary knowledge.
          </p>
          <p className="mt-4">
            Click on a lesson card to start learning or explore tutorials to
            learn the basics of the language.
          </p>
        </div>
      </div>
      <div>
        <Lessons></Lessons>
      </div>
      <div className="flex justify-center">
        <Link to={'/tutorials'}><button className="btn block">Tutorials</button></Link>
      </div>
    </section>
  );
};

export default LetsLearn;
