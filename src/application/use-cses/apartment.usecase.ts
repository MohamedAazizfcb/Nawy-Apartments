import { ApartmentRepository } from "@/src/infrastructure/repositories/apartment.repository";
import { Apartment } from "@/src/domain/entities/apartment.entity";

export class ApartmentUseCases {
  constructor(private apartmentRepo: ApartmentRepository) {}

  async add(apartmentData: any, imgUrl: string): Promise<Apartment> {
    const apartment = new Apartment(
      0, // id will be auto-generated
      imgUrl,
      apartmentData.appartmentTypeId,
      apartmentData.compoundId,
      apartmentData.numberOfBeds,
      apartmentData.numberOfBaths,
      apartmentData.areaInM2,
      apartmentData.price,
      apartmentData.address,
      apartmentData.floor,
      apartmentData.availability,
      apartmentData.description,
      new Date(),
      new Date()
    );
    return this.apartmentRepo.save(apartment);
  }

  async getPaged(page: number, limit: number): Promise<Apartment[]> {
    return this.apartmentRepo.findPaged(page, limit);
  }

  async getOne(id: number): Promise<Apartment | null> {
    return this.apartmentRepo.findOne(id);
  }

  async getTotalCount(): Promise<number> {
    return this.apartmentRepo.getTotalCount();
  }
}
