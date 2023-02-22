import { BsCircleFill } from "react-icons/bs";
import { Iproject, IService, Iskill } from "./type";

export const service: IService[] = [
  // 1
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill

  },
  // 2
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill
  },
  // 3
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill
  },
  // 4
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill
  },
  // 5
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill
  },
  // 6
  {
    title: "Fontend Dev",
    about: "lorem...",
    Icon: BsCircleFill
  },
];

export const languages: Iskill[] = [

  {
    name: "javascript",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "typescript",
    level: "80%",
    Icon: BsCircleFill,
  },

  {
    name: "ReactJs",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "nodeJs",
    level: "50%",
    Icon: BsCircleFill,
  },

  {
    name: "Nextjs",
    level: "60%",
    Icon: BsCircleFill,
  },

];

export const tools: Iskill[] = [

  {
    name: "MongoDB",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "MySQL",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshops",
    level: "70%",
    Icon: BsCircleFill,
  },

  {
    name: "Ant-Design",
    level: "70%",
    Icon: BsCircleFill,
  },

  {
    name: "Tailwindcss",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const projects: Iproject[] = [
  {
    id: 1,
    name: "Store Apple",
    description: "I'm studying and finished",
    image_path: "/image/apple.png",
    deploy_url: "https://tdk-applestore.netlify.app/",
    github_url: "https://github.com/khuongtran02052001/AppleStore",
    category: ["fullstack"],
    key_techs: ["Reactjs - Typescript", "mongDB"],
  },
  {
    id: 2,
    name: "Ruby Shop",
    description: "I'm studying and finished",
    image_path: "/image/ruby.png",
    deploy_url: "https://rubyshop.vercel.app/",
    github_url: "https://github.com/khuongtran02052001/RubyShop",
    category: ["next"],
    key_techs: ["Nextjs - Typescript"],
  },
];
