import { NextApiRequest, NextApiResponse } from 'next';
import { ApartmentUseCases } from '@/src/application/use-cses/apartment.usecase';
import { ApartmentRepository } from '@/src/infrastructure/repositories/apartment.repository';

const apartmentUseCases = new ApartmentUseCases(new ApartmentRepository());

export const addApartment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const file = (req as any).file;
  try {
    const apartment = await apartmentUseCases.add(body, file.path.replace('public', ''));
    res.status(201).json(apartment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const getPagedApartments = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const apartments = await apartmentUseCases.getPaged(Number(page), Number(limit));
    res.status(200).json(apartments);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const getOneApartment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {

    const apartment = await apartmentUseCases.getOne(Number(id));
    if (apartment) {
      res.status(200).json(apartment);
    } else {
      res.status(404).json({ error: 'Apartment not found' });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
