import { PrismaClient } from "@prisma/client";
import _ from "underscore";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const {
      query: { id },
    } = req;

    const companyId = id.toLowerCase();
    // console.log("Here we are!!!");
    console.log(`Found a company: ${id}`);

    const dataRows = await prisma.company_shopping.findMany({
      where: {
        company: {
          equals: companyId,
        },
      },
    });
    res.status(200).json(dataRows);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
