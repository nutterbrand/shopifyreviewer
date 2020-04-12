import { PrismaClient } from "@prisma/client";
import _ from "lodash";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const users = await prisma.company_shopping.findMany({});
    // var grouped = _.mapValues(_.groupBy(users, "keyword"), (clist) =>
    //   clist.map((users) => _.omit(users, "keyword"))
    // );
    // console.log(grouped);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
