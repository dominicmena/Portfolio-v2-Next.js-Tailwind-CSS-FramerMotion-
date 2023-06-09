import React from "react";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-semibold">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} || {place}
        </span>
        <p className="font-medium dark:text-primaryDark w-full text-bold md:text-sm xs:text-[17px]">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Certificate of Completion"
              time="02 2023 - 04 2023"
              place="General Assembly"
              info="Full Stack Developer"
            />
          <Details
            type="Bachelor of Arts"
            time="08 2013 - 05 2017"
            place="Arizona State University"
            info="Philosophy"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
