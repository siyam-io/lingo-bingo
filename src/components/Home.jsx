import React from "react";
import ImageSlider from "./ImageSlider";

import SuccessCount from "./SuccessCount";
import WhyChooseUs from "./WhyChooseUs";
import LetsLearn from "./LetsLearn";
import Lessons from "./Lessons";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import WhyChooseLingoBingo from "./WhyChooseLingoBingo";
import About from "./About";
import AboutOurTeam from "./AboutOurTeam";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Image Slider Section */}
      <section>
        <ImageSlider />
      </section>

      {/* About Section */}
      <section className="">
        <About />
      </section>

      {/* Success Count Section */}
      <section className="">
        <SuccessCount />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="">
          <WhyChooseUs />
        </div>
      </section>

      <section className="py-12">
        <div className="">
          <AboutOurTeam />
        </div>
      </section>

      {/* Why Lingo Bingo Stands Out? */}
      <section className="py-12">
        <div className="">
          <WhyChooseLingoBingo></WhyChooseLingoBingo>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <ToastContainer></ToastContainer> */
}
