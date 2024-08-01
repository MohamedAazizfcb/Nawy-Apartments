// import { addDIService } from "@/core/application/context/service.provider";
import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { AppartmentsListElement } from "../../domain/dtos/appartments-list-element.dto";
import { IListApartmentsService } from "../contracts/list-appartments.interface";

export class ListApartmentsService implements IListApartmentsService{
    apartments: AppartmentsListElement[] = [
        {
            id: 1,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 2,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 3,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 4,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 5,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 6,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 7,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 9,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 10,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 11,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },
        {
            id: 12,
            imgUrl: "https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg",
            appartmentTypeId: 1,
            compoundId: 1,
            numberOfBeds: 3,
            numberOfBaths: 2,
            areaInM2: 242,
        },

    ];

    
    getApartmentsByPage(pageNumber: number, pageSize: number):  Promise<APIResponse<AppartmentsListElement[]>>  {
        if(pageNumber <= 0)
        {
            pageNumber = 1;
        }

        let startIndex = (pageNumber-1) * pageSize;
        let endIndex = startIndex + pageSize;
        if(endIndex > this.apartments.length)
        {
            endIndex = this.apartments.length;
        }
        return Promise.resolve(
            {
                data:  this.apartments.slice(startIndex, endIndex),
                message: "success",
                pageNumber: pageNumber,
                pageSize: pageSize,
                numberOfPages: Math.ceil(this.apartments.length / pageSize)
            }
           
        )
    }
};