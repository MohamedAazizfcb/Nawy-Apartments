import { APIResponse } from "@/core/domain/dtos/api-response.dto";

export interface IAddApartmentService{
    addApartment(apartment: FormData): Promise<APIResponse<string[]>>;
}