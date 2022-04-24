import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { searchMethod } from '@/lib/search-method';

const prisma = new PrismaClient();

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const searchText = _.query.indonesia as string;
  const findBy = _.query.method as string;
  const result = await prisma.alqomus.findMany({
    where: searchMethod(findBy, 'indonesia', searchText),
  });
  res.status(200).json(result);
};
