import { Iskill } from "@/type";
import { NextApiRequest, NextApiResponse } from "next";

const getTools = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send({ tools })
    } catch (error) {
        return res.status(500).send({ err: "Error" });
    }
};

export default getTools

const tools: Iskill[] = [

    {
        name: "MongoDB",
        level: "50%",
    },
    {
        name: "MySQL",
        level: "40%",
    },
    {
        name: "Photoshops",
        level: "70%",
    },

    {
        name: "Ant-Design",
        level: "70%",
    },

    {
        name: "Tailwindcss",
        level: "60%",
    },
];