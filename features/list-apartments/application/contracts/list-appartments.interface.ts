import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { AppartmentsListElement } from "../../domain/dtos/appartments-list-element.dto";

export interface IListApartmentsService{
    getApartmentsByPage(pageNumber: number, pageSize: number): Promise<APIResponse<AppartmentsListElement[]>>;
}