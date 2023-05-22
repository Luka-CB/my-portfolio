import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../config/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Method not Allowed!" });
  }

  try {
    const { projectId } = req.query;

    const deletedProject = await prisma.project.delete({
      select: {
        id: true,
      },
      where: {
        id: projectId as string,
      },
    });

    if (!deletedProject) throw new Error("Delete project request has failed!");

    res.status(200).json({ msg: "Deleted Successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
}
