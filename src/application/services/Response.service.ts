import { APIResponse } from "@/src/domain/dtos/APIResponse.dto";
import { NextApiResponse } from "next"

export let EmitResponse = <T_Data>(
    res: NextApiResponse, 
    aPIResponse: APIResponse<T_Data>,
) => {

    res.status(aPIResponse.statusCode).json(aPIResponse);
}