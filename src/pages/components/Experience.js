import React from "react";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <Liicon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @ {company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} || {address}
        </span>
        <ul className="font-medium w-full md:text-md mt-2 space-y-1">
          {work.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 shrink-0 text-primary dark:text-primaryDark">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            position="Associate Software Engineer, Custom Programming"
            company="Paylocity"
            companyLink="https://www.paylocity.com/"
            time="Aug 2024 - Present"
            address="Remote"
            work={[
              <>Develop custom <span className="font-bold">Payroll</span> and <span className="font-bold">HR</span> solutions using <span className="font-bold">SQL</span>, reports, and system configurations to support client-specific business needs.</>,
              <>Meet directly with clients to understand requirements, walk through technical solutions, and guide projects from <span className="font-bold">discovery through delivery</span>.</>,
              <>Build and maintain custom reports in <span className="font-bold">Visual Studio</span> (<span className="font-bold">SSRS/RDL</span>), utilizing <span className="font-bold">SQL queries</span>, <span className="font-bold">stored procedures</span>, and report logic to deliver accurate and actionable client reporting.</>,
              <>Manage multiple projects simultaneously while maintaining a high level of quality, responsiveness, and attention to detail.</>,
              <>Utilize <span className="font-bold">Git</span>/<span className="font-bold">SVN</span> <span className="font-bold">version control</span> and development best practices to maintain reliable and maintainable solutions.</>,
            ]}
          />
        <Details
            position="Associate Engineer - Solutions"
            company="Innovative-e"
            companyLink="https://innovative-e.com/"
            time="Aug 2023 - Present"
            address="Remote"
            work={[
              <>Design and develop custom <span className="font-bold">SaaS</span> applications tailored to client requirements, utilizing <span className="font-bold">React</span>, <span className="font-bold">JavaScript</span>, and modern <span className="font-bold">web development</span> practices to deliver effective business solutions.</>,
              <>Collaborate directly with clients to gather requirements, refine workflows, and translate business needs into functional applications that improve <span className="font-bold">user experience</span> and operational efficiency.</>,
              <>Utilize <span className="font-bold">SQL Server</span> for <span className="font-bold">data manipulation</span>, reporting, and application support while leveraging <span className="font-bold">REST APIs</span> to integrate third-party services and extend application functionality.</>,
            ]}
          />
        <Details
            position="Software Engineer Intern"
            company="i4Software"
            companyLink="https://www.i4software.com"
            time="July 2023 - Aug 2023"
            address="Remote"
            work={[
              <>Collaborated with <span className="font-bold">front-end</span> and <span className="font-bold">back-end</span> development teams to design and build custom <span className="font-bold">web applications</span>, gaining hands-on experience throughout the full <span className="font-bold">software development lifecycle</span>.</>,
              <>Participated in <span className="font-bold">requirement gathering</span> exercises by working directly with stakeholders, translating business needs into technical requirements, and helping align development efforts across teams.</>,
              <>Contributed to application development using <span className="font-bold">React.js</span>, <span className="font-bold">Next.js</span>, and <span className="font-bold">TypeScript</span> while learning best practices for planning, development, testing, and deployment.</>,
              <>Worked in an <span className="font-bold">Agile</span> environment, communicating across technical teams, tracking project progress, and helping deliver solutions within established project timelines.</>,
            ]}
          />
          <Details
            position="Senior Strategy & Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Aug 2021 - Dec 2022"
            address="Remote"
            work={[
              <>Conducted <span className="font-bold">data analysis</span> through writing <span className="font-bold">SQL</span> queries in <span className="font-bold">MODE</span> to support operational decision-making.</>,
              <>Collaborated with account owners to ensure smooth <span className="font-bold">merchant onboarding</span>.</>,
              <>Developed and implemented projects to enhance <span className="font-bold">operational efficiency</span>.</>,
              <>Participated in <span className="font-bold">Quarterly Business Reviews (QBRs)</span> with post-sales team members to establish strong merchant relationships and devise sales strategies.</>,
            ]}
          />
          <Details
            position="Lead Merchant Operations Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Jul 2019 - Aug 2021"
            address="Remote"
            work={[
              <>Established and managed <span className="font-bold">team structure</span>, creating <span className="font-bold">training documents</span> and schedules, conducting team meetings, and tracking <span className="font-bold">performance metrics</span>.</>,
              <>Assisted merchants with building menus, resolving logistical issues, and addressing concerns with <span className="font-bold">delivery metrics</span>.</>,
              <>Designed <span className="font-bold">email campaigns</span> based on merchant promotions and increased awareness of new locations and merchants.</>,
              <>Trained new merchants on platform tools and navigation.</>,
            ]}
          />
          <Details
            position="Non-Partner Launch Lead"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Mar 2019 - Jul 2019"
            address="Remote"
            work={[
              <>Conducted thorough <span className="font-bold">data verification</span> to ensure accuracy before uploading large amounts of data to the platform.</>,
              <>Created and streamlined <span className="font-bold">standard processes</span> to work cross-functionally with vendors and stakeholders.</>,
              <>Facilitated communication between internal teams and vendors to coordinate and meet deadlines.</>,
              <>Analyzed and provided feedback on team processes to improve <span className="font-bold">operational efficiency</span>.</>,
              <>Monitored and reported on the quality of work provided by <span className="font-bold">third-party vendors</span>.</>,
            ]}
          />
          <Details
            position="Senior Onboarding Representative"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="Jan 2018 - Mar 2019"
            address="Remote"
            work={[
              <>Managed <span className="font-bold">merchant onboarding</span> by coordinating with <span className="font-bold">Pre-Sales</span> to handle internal data on merchants.</>,
              <>Addressed menu issues and complaints received through <span className="font-bold">activation team</span> requests.</>,
              <>Facilitated the process of partnering with merchants and bringing them onto the platform.</>,
            ]}
          />
          <Details
            position="Enterprise Menu Team Associate"
            company="DoorDash"
            companyLink="https://www.doordash.com/"
            time="May 2017 - Jan 2018"
            address="Remote"
            work={[
              <>Developed proficiency in <span className="font-bold">SQL</span> to extract menu data and locate specific item information.</>,
              <>Entered and updated menus efficiently and accurately with strong <span className="font-bold">attention to detail</span>.</>,
              <>Collaborated with high-level merchants on the platform to coordinate <span className="font-bold">menu roll-outs</span>.</>,
              <>Worked across teams to provide top partnered merchants with a positive experience in <span className="font-bold">menu support</span>.</>,
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
