import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import axiosInstance from "@/core/infrastructure/apis/axios.module";
import { resolve } from "path";
import { IAddApartmentService } from "../contracts/add-appartments.interface";
import { AddApartmentDTO } from "../../domain/dtos/apartment-add.dto";

export class AddApartmentsService implements IAddApartmentService{
    addApartment(apartment: FormData): Promise<APIResponse<string[]>>  {
        try 
        {
            return axiosInstance.post('/api/apartments', apartment, {
                headers: {
                  'Content-Type': 'multipart/form-data',
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