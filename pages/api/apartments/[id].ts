import { NextApiRequest, NextApiResponse } from 'next';
import { getById } from '@/src/presentation/controllers/apartment.controller';
import { connectDB } from '@/src/infrastructure/db-connect';
import { APIResponse } from '@/src/domain/dtos/APIResponse.dto';
import { EmitResponse } from '@/src/application/services/Response.service';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(); // Ensure database is connected

  if (req.method === 'GET') {
    await getById(req, res);
  } 
  else 
  {
    EmitResponse(res, new APIResponse<null>(null, "Method not allowed", true, 405 ));
  }
};
