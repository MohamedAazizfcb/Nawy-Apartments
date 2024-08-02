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
  description: string;
  createdAt: Date;
  constructor(
    id: number,
    imgUrl: string,
    appartmentTypeId: number,
    compoundId: number,
    numberOfBeds: number,
    numberOfBaths: number,
    areaInM2: number,
    price: number,
    address: string,
    floor: number,
    description: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.appartmentTypeId = appartmentTypeId;
    this.compoundId = compoundId;
    this.numberOfBeds = numberOfBeds;
    this.numberOfBaths = numberOfBaths;
    this.areaInM2 = areaInM2;
    this.price = price;
    this.address = address;
    this.floor = floor;
    this.description = description;
    this.createdAt = createdAt;
  }
}
