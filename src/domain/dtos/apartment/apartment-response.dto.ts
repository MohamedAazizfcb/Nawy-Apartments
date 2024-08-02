export class ApartmentResponse {
  id: number;
  imgUrl: string;
  appartmentTypeId: number;
  compoundId: number;
  numberOfBeds: number;
  numberOfBaths: number;
  areaInM2: number;
  price: number;
  address: string;
  floor: number;
  amenities: string[];
  description: string;
  createdAt: Date;
}
