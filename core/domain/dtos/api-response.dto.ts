export interface APIResponse<T_Data>{
    data: T_Data;
    message: string;
    pageNumber: number;
    pageSize: number;
    numberOfPages: number;
}