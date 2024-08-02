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
import { ApartmentToApartmentResponse, AprtmentToApartmentListRes } from '@/src/application/mappers/apartment.mapper';
import { ApartmentResponse } from '@/src/domain/dtos/apartment/apartment-response.dto';
import { addApartmentSchema } from '@/src/application/validators/add-apartment.validator';

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

export const addApartment =  async (req: NextApiRequest, res: NextApiResponse)=>{
  await connectDB(); // Ensure database is connected
  const apartmentRepo = new ApartmentRepository();
  const apartmentUseCases = new ApartmentUseCases(apartmentRepo);
  const { error } = addApartmentSchema.validate(req.body);
  if (error) {
    EmitResponse(res, new APIResponse<null>(null, error.message, true, 400 ));
    return;
  }

  upload.single('imgUrl')(req as any, res as any, async (err: any) => 
  {
    if (err) 
    {
      EmitResponse(res, new APIResponse<null>(null, err.message, true, 500 ));
    }
    try 
    {
      const apartment = await apartmentUseCases.add(req.body, (req as any).file.path.replace('public', ''));
      EmitResponse(res, new APIResponse<string>("Created Successfully", "", false, 201 ));
    } 
    catch (e: any) 
    {
      EmitResponse(res, new APIResponse<null>(null, e.message, true, 500 ));
    }
  });
}

export const getPaged =  async (req: NextApiRequest, res: NextApiResponse)=>{
  await connectDB(); // Ensure database is connected
  const apartmentRepo = new ApartmentRepository();
  const apartmentUseCases = new ApartmentUseCases(apartmentRepo);

  const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 1000;
  const pageNumber = req.query.pageNumber ? Number(req.query.pageNumber) : 1;

  const { page = pageNumber, limit = pageSize } = req.query;
  try {
    const apartments = await apartmentUseCases.getPaged(Number(page), Number(limit));
    let totalCount = await apartmentUseCases.getTotalCount();
    let numberOfPages = Math.ceil(totalCount / Number(limit))
    if( Number(page) <= numberOfPages)
    {
      let result: ApartmentListingResponse[] = apartments.map(AprtmentToApartmentListRes);
      EmitResponse(res, new APIResponse<ApartmentListingResponse[]>(result, "", false, 200, Number(page), Number(limit), numberOfPages ));
    }
    else
    {
      EmitResponse(res, new APIResponse<null>(null, "Exceded Number Of Pages", true, 400 ));
    }
    
  } catch (e: any) {
    EmitResponse(res, new APIResponse<null>(null, e.message, true, 500 ));
  } 
}

export const getById = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(); // Ensure database is connected
  const apartmentRepo = new ApartmentRepository();
  const apartmentUseCases = new ApartmentUseCases(apartmentRepo);
  const { id } = req.query;
  try {

    const apartment = await apartmentUseCases.getOne(Number(id));
    if (apartment) {
      let result: ApartmentResponse = ApartmentToApartmentResponse(apartment);
      EmitResponse(res, new APIResponse<ApartmentResponse>(result, "", false, 200 ));
    } else {
      EmitResponse(res, new APIResponse<null>(null, 'Apartment not found', true, 404 ));
    }
  } catch (e: any) {
    EmitResponse(res, new APIResponse<null>(null, e.message, true, 500 ));
  }
};
