import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { ApartmentView } from "../../domain/dtos/apartment-response.dto";
import { IGetApartmentService } from "../contracts/get-appartment.interface";
import axiosInstance from "@/core/infrastructure/apis/axios.module";


export class GetApartmentService implements IGetApartmentService{
    getApartmentById(id: number):  Promise<APIResponse<ApartmentView>>  {
        try 
        {
            return axiosInstance.get('/api/apartments/'+id);
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