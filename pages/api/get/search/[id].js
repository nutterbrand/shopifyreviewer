import { PrismaClient } from "@prisma/client";
import _ from "underscore";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const {
      query: { id },
    } = req;

    console.log(`Found a company_keyword_rank: ${id}`);

    const dataRows = await prisma.company_keyword_rank.findMany({
      where: {
        company_id: {
          equals: Number(id),
        },
      },
    });
    res.status(200).json(dataRows);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
