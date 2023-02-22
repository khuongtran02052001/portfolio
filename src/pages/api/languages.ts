import { Iskill } from "@/type";
import { NextApiRequest, NextApiResponse } from "next";

const getLanguages = async (_: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send({ languages })
    } catch (error) {
        return res.status(500).send({ err: "Error" });
    }
};

export default getLanguages

const languages: Iskill[] = [

    {
        name: "javascript",
        level: "60%",
    },

    {
        name: "typescript",
        level: "80%",
    },

    {
        name: "ReactJs",
        level: "60%",
    },

    {
        name: "nodeJs",
        level: "50%",
    },

    {
        name: "Nextjs",
        level: "60%",
    }, {
        name: "nodeJs",
        level: "50%",
    },

    {
        name: "Nextjs",
        level: "60%",
    }, {
        name: "nodeJs",
        level: "50%",
    },

    {
        name: "Nextjs",
        level: "60%",
    },

];
