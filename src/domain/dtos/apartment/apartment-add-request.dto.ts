export class ApartmentAddRequest {
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
  availability: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
