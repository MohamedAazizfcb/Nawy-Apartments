export class ApartmentListingResponse {
  id: number;
  imgUrl: string;
  appartmentTypeId: number;
  compoundId: number;
  numberOfBeds: number;
  numberOfBaths: number;
  areaInM2: number;
  constructor(
    id: number,
    imgUrl: string,
    appartmentTypeId: number,
    compoundId: number,
    numberOfBeds: number,
    numberOfBaths: number,
    areaInM2: number,
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.appartmentTypeId = appartmentTypeId;
    this.compoundId = compoundId;
    this.numberOfBeds = numberOfBeds;
    this.numberOfBaths = numberOfBaths;
    this.areaInM2 = areaInM2;
  }
}
