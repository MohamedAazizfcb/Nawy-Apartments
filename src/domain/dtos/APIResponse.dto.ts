export class APIResponse<T_Data>{
    data: T_Data;
    message: string;
    error: boolean;
    statusCode: number;
    pageNumber?: number;
    pageSize?: number;
    numberOfPages?: number;
    constructor(
        data: T_Data,
        message: string,
        error: boolean,
        statusCode: number,
        pageNumber?: number,
        pageSize?: number,
        numberOfPages?: number,
    ) 
    {
        this.data = data;
        this.message = message;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.numberOfPages = numberOfPages;
        this.error = error;
        this.statusCode = statusCode;
    }
}