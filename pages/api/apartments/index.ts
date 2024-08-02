import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/src/infrastructure/db-connect';
import { ApartmentRepository } from '@/src/infrastructure/repositories/apartment.repository';
import multer from 'multer';
import path from 'path';
import { ApartmentUseCases } from '@/src/application/use-cses/apartment.usecase';

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(); // Ensure database is connected

  const apartmentRepo = new ApartmentRepository();
  const apartmentUseCases = new ApartmentUseCases(apartmentRepo);

  if (req.method === 'POST') {
    upload.single('imgUrl')(req as any, res as any, async (err: any) => {
      if (err) return res.status(500).json({ error: err.message });
      try {
        const apartment = await apartmentUseCases.add(req.body, (req as any).file.path.replace('public', ''));
        res.status(201).json(apartment);
      } catch (e) {

        res.status(500).json({ error: e });
      }
    });
  } else if (req.method === 'GET') {
    const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 1000;
    const pageNumber = req.query.pageNumber ? Number(req.query.pageNumber) : 1;

    const { page = pageNumber, limit = pageSize } = req.query;
    try {
      const apartments = await apartmentUseCases.getPaged(Number(page), Number(limit));
      res.status(200).json(apartments);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
