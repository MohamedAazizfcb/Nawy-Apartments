import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/src/infrastructure/db-connect';
import { ApartmentRepository } from '@/src/infrastructure/repositories/apartment.repository';
import multer from 'multer';
import path from 'path';
import { ApartmentUseCases } from '@/src/application/use-cses/apartment.usecase';
import { APIResponse } from '@/src/domain/dtos/APIResponse.dto';
import { EmitResponse } from '@/src/application/services/Response.service';
import { ApartmentAddRequest } from '@/src/domain/dtos/apartment/apartment-add-request.dto';
import { ApartmentListingResponse } from '@/src/domain/dtos/apartment/apartment-listing-response.dto';
import { AprtmentToApartmentListRes } from '@/src/application/mappers/apartment.mapper';
import { addApartment, getPaged } from '@/src/presentation/controllers/apartment.controller';

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
    await addApartment(req, res);
  } 

  else if (req.method === 'GET') {
    await getPaged(req, res);
  }

  else {
    EmitResponse(res, new APIResponse<null>(null, 'Method not allowed', true, 405 ));
  }
};
