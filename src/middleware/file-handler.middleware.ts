import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import { APIResponse } from '../domain/dtos/APIResponse.dto';
import { EmitResponse } from '../application/services/Response.service';

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

// Middleware function for file upload
export const uploadMiddleware = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  upload.single('imgUrl')(req as any, res as any, (err: any) => {
    if (err) return EmitResponse(res, new APIResponse<null>(null, err.message, true, 500 ));
    next();
  });
};
