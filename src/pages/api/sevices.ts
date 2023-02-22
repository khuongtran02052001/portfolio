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
        title: "Intern",
        about: "Chanhly Solution and Technology",
    },
    // 2
    {
        title: "Fresher",
        about: "CÔNG TY CỔ PHẦN CÔNG NGHỆ BẤT ĐỘNG SẢN MGI",
    },
];
