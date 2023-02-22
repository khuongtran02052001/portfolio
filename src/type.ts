import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
}

export interface Iskill {
  name: string;
  level: string;
}

export interface Iproject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deploy_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}


export type Category = "react" | "node" | "next" | "fullstack"