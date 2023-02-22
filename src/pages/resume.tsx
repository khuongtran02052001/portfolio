import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import Head from "next/head";
import { fadeUp, routeAnimation } from "../animation/animation";
const Resume: React.FC = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <Head>
        <title>Tran Duy Khuong | Resume </title>
        <meta name="description" content='This is a resume page to help people know more about me.' />
      </Head>
      {/* exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <p className="my-3 text-2xl font-bold">Education</p>
          <div className="">
            <p className="my-2 text-xl font-base">Web Programming</p>
            <p className="font-semibold">Ly Tu Trong (2020-2021)</p>
            <p className="my-3">
              I am currently pursuing Ly Tu Trong in Web Programming from social
              networking sites
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <p className="my-3 text-2xl font-bold">Experience</p>
          <div className="">
            <p className="my-2 text-xl font-base">Junior Developer DK</p>
            {/* <p className="font-semibold"></p> */}
            <p className="my-3">I&apos;m just an junior now</p>
          </div>
        </motion.div>
      </div>

      {/* languages && tool */}

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <p className="my-3 text-2xl font-bold">
            Languages &amp; Frameworks
          </p>
          <div className="my-2">
            {languages.map((lg, i) => (
              <Bar data={lg} key={i} />
            ))}
          </div>
        </div>
        <div>
          <p className="my-3 text-2xl font-bold">Tools &amp; Library </p>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Resume