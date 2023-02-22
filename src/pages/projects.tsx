import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import Head from 'next/head'
import { motion } from "framer-motion";
import { fadeUp, routeAnimation, stagger } from "../animation/animation";
import { projects as projectsState } from "../data";
import { Category } from "../type";

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState(projectsState);
  const [active, setActive] = React.useState("all");
  const [showDetail, setShowDetail] = React.useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsState);
      setActive(category);
      return;
    }

    const newProjects = projectsState.filter((pr) =>
      pr.category.includes(category)
    );
    setProjects(newProjects);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <Head>
        <title>Tran Duy Khuong | Projects </title>
      </Head>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              setShowDetail={setShowDetail}
              showDetail={showDetail}

              projectsData={project}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects