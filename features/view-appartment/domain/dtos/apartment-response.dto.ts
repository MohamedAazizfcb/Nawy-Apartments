export interface ApartmentView {
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
  description: string;
  createdAt: Date;
}
