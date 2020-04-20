import { PrismaClient } from "@prisma/client";
import _ from "underscore";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const dataRows = await prisma.company_shopping.findMany({});
    res.status(200).json(dataRows);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
