import { NextApiRequest, NextApiResponse } from 'next';
import { getOneApartment } from '@/src/presentation/controllers/apartment.controller';
import { connectDB } from '@/src/infrastructure/db-connect';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(); // Ensure database is connected

  if (req.method === 'GET') {
    getOneApartment(req, res);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
