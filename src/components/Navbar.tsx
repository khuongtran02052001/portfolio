import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface INavItemProps {
  active: string;
  setActive: Function;
  name: string;
  route: string;
}

interface ComponentNavItem extends React.FC<INavItemProps> { }

const NavItem: ComponentNavItem = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route} legacyBehavior aria-label={`${name}`}
      className="mx-2 cursor-pointer hover:border-b-4 hover:text-indigo-500"
      onClick={() => setActive(name)}
    >
      {name}
    </Link >
  ) : null;
};

const Navbar: React.FC = () => {
  const [active, setActive] = React.useState<string>("");

  const { pathname } = useRouter();

  React.useEffect(() => {
    if (pathname === "/") {
      setActive("About");
    }
    if (pathname === "/projects") {
      setActive("Projects");
    }
    if (pathname === "/resume") {
      setActive("Resume");
    }
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-800 dark:text-violet-300 border-b-4 border-green dark:border-violet-200 md:text-2xl">
        {active}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem active={active} setActive={setActive} route="/" name="About" />

        <NavItem
          active={active}
          setActive={setActive}
          route="/resume"
          name="Resume"
        />

        <NavItem
          active={active}
          setActive={setActive}
          route="/projects"
          name="Projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
