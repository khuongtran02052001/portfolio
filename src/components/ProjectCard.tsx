import React from "react";
import Image from "next/legacy/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { Iproject } from "../type";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation/animation";
import Link from "next/link";

interface IPropsProject {
  projectsData: Iproject;
  showDetail: null | number
  setShowDetail: (id: null | number) => void
}

interface ComponentProjectCard extends React.FC<IPropsProject> { }

const ProjectCard: ComponentProjectCard = props => {
  const { projectsData, showDetail, setShowDetail } = props
  const { name,
    category,
    deploy_url,
    description,
    github_url,
    image_path,
    key_techs,
    id } = projectsData
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
      />

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeUp}
              className='border-4 border-gray-100'
            >
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex justify-center my-4 space-x-3">
              <Link
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                aria-label="Github"
              >
                <AiFillGithub /> <span>Github</span>
              </Link>
              <Link href={deploy_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                aria-label="Project"
              >
                <AiFillProject /> <span>Project</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeUp} className="mb-3 font-medium">{description}</motion.h3>

            <motion.div variants={fadeUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
