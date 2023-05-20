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
    const { username, password } = req.body;

    const user = await prisma.user.findFirst();

    if (!user) throw new Error("User Not Find!");
    if (user?.username !== username) throw new Error("Username is Incorrect!");
    if (user?.password !== password) throw new Error("Password is Incorrect!");

    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
}
