import { Iproject } from "@/type";
import { NextApiRequest, NextApiResponse } from "next";

const getProjects = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send({ projects })
    } catch (error) {
        return res.status(500).send({ err: "Error" });
    }
};

export default getProjects

const projects: Iproject[] = [
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