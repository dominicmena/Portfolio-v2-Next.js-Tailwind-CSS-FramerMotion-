import React from "react";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./Liicon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @ {company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} || {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary."
          />
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary."
          />
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary."
          />
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary."
          />
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work="Responsibilities included extracting specific, large data samples related to sales, reconciliations, and consumer reports using SQL queries in MODE. Analyzing the data and providing insights to various stakeholders was also a crucial part of the job. Cross-functional collaboration with account owners ensured a seamless onboarding experience for enterprise merchants. Additionally, commission audits, process gaps, and document improvements were built and scaled by leading projects. To foster merchant relationships and create effective sales strategies, attendance at QBRs with post-sales team members was necessary."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
