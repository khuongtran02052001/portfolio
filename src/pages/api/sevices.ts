import { IService } from "@/type";
import { NextApiRequest, NextApiResponse } from "next";

const getService = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send({ service })
    } catch (error) {
        return res.status(500).send({ err: "Error" });
    }
};

export default getService

const service: IService[] = [
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
    // 2
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
    // 3
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
    // 4
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
    // 5
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
    // 6
    {
        title: "Fontend Dev",
        about: "lorem...",
    },
];
