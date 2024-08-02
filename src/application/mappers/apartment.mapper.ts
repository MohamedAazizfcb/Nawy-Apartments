import { ApartmentAddRequest } from "@/src/domain/dtos/apartment/apartment-add-request.dto";
import { ApartmentListingResponse } from "@/src/domain/dtos/apartment/apartment-listing-response.dto";
import { ApartmentResponse } from "@/src/domain/dtos/apartment/apartment-response.dto";
import { Apartment } from "@/src/domain/entities/apartment.entity";

export const ApartmentToApartmentResponse = (apartment: Apartment): ApartmentResponse => {
  return new ApartmentResponse(
    apartment.id,
    apartment.imgUrl,
    apartment.appartmentTypeId,
    apartment.compoundId,
    apartment.numberOfBeds,
    apartment.numberOfBaths,
    apartment.areaInM2,
    apartment.price,
    apartment.address,
    apartment.floor,
    apartment.description,
    apartment.createdAt,
  );
};

export const AddAprtmentReqToApartment = (apartment: ApartmentAddRequest): Apartment => {
  return new Apartment(
    -1,
    apartment.imgUrl,
    apartment.appartmentTypeId,
    apartment.compoundId,
    apartment.numberOfBeds,
    apartment.numberOfBaths,
    apartment.areaInM2,
    apartment.price,
    apartment.address,
    apartment.floor,
    true,
    apartment.description,
    new Date(),
    new Date(),
  );
};

export const AprtmentToApartmentListRes = (apartment: Apartment): ApartmentListingResponse => {
  return new ApartmentListingResponse(
    apartment.id,
    apartment.imgUrl,
    apartment.appartmentTypeId,
    apartment.compoundId,
    apartment.numberOfBeds,
    apartment.numberOfBaths,
    apartment.areaInM2,
  );
};