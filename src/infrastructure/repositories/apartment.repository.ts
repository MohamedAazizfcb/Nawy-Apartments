import { AppDataSource } from "../ormconfig";
import { Apartment } from "@/src/domain/entities/apartment.entity";

export class ApartmentRepository {
  private repo = AppDataSource.getRepository(Apartment);

  async save(apartment: Apartment): Promise<Apartment> {
    return this.repo.save(apartment);
  }

  async findPaged(page: number, limit: number): Promise<Apartment[]> {
    return this.repo.find({
      order: {
        createdAt: 'DESC',
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    
  }

  async findOne(id: number): Promise<Apartment | null> {
    return this.repo.findOne({ where: { id } });
  }

  async getTotalCount(): Promise<number> {
    return this.repo.count();
  }
}
