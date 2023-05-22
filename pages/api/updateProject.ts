import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../config/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Method not Allowed!" });
  }

  try {
    const data = req.body;
    const { projectId } = req.query;

    const updatedProject = await prisma.project.update({
      select: {
        id: true,
      },
      where: {
        id: projectId as string,
      },
      data: data,
    });

    if (!updatedProject) throw new Error("Update project request has failed!");

    res.status(200).json({ msg: "Updated Successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
}
