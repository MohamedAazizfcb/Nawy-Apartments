import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { AppartmentsListElement } from "../../domain/dtos/appartments-list-element.dto";
import { IListApartmentsService } from "../contracts/list-appartments.interface";
import axiosInstance from "@/core/infrastructure/apis/axios.module";
import { resolve } from "path";
import { rejects } from "assert";

export class ListApartmentsService implements IListApartmentsService{
    getApartmentsByPage(pageNumber: number, pageSize: number):  Promise<APIResponse<AppartmentsListElement[]>>  {
        try 
        {
            return axiosInstance.get('/api/apartments', {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },
              });
        } 
        catch (error) 
        {
            console.error(error);
            return new Promise(
                (resolve, reject)=>{
                    reject(error)
                }
            )
        }
    };
};