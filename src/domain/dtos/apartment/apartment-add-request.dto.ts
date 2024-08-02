export class ApartmentAddRequest {
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
  constructor(
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
  ) {
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
  }
}
