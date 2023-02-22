import React from "react";
import { Category } from "../type";

interface INavItem {
  projectsData: Category | "all";
  handleFilterCategory: Function;
  active: string;
}

interface ComponentNavItem extends React.FC<INavItem> { }

export const NavItem: ComponentNavItem = ({ projectsData, handleFilterCategory, active }) => {
  let classname = "capitalize cursor-pointer hover:text-green";
  if (active === projectsData) classname += "text-green";
  return (
    <li
      onClick={() => handleFilterCategory(projectsData)}
      className={classname}
    >
      {projectsData}
    </li>
  );
};

const ProjectsNavbar: ComponentProjectsNavbar = props => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem {...props} projectsData="all" />
      <NavItem {...props} projectsData="react" />
      <NavItem {...props} projectsData="node" />
      <NavItem {...props} projectsData="next" />
      <NavItem {...props} projectsData="fullstack" />
    </div>
  );
};

export default ProjectsNavbar;

interface IProjectsNavbarProps {
  handleFilterCategory: Function;
  active: string;
}

interface ComponentProjectsNavbar extends React.FC<IProjectsNavbarProps> { }