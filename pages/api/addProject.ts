import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../config/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not Allowed!" });
  }

  try {
    const data = req.body;

    const newProject = await prisma.project.create({
      data: data,
    });

    if (!newProject) throw new Error("Add new project request has failed!");

    res.status(200).json(newProject);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
}
