import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { ApartmentView } from "../../domain/dtos/apartment-response.dto";

export interface IGetApartmentService{
    getApartmentById(id: number): Promise<APIResponse<ApartmentView>>;
}