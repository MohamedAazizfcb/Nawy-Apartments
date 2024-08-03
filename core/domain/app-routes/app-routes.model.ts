import { IRouteModel } from "./app-route.interface";

export class RoutesModel // Singleton
{
    private static instance: RoutesModel;

    private constructor() {}

    public static getInstance(): RoutesModel {
      if (!RoutesModel.instance) {
        RoutesModel.instance = new RoutesModel();
      }
      return RoutesModel.instance;
    }

    private apartments: IRouteModel = {
        route: 'apartments',
        label_en: 'Apartments', 
        label_ar: 'الشقق'
    };

    addApartment: IRouteModel = {
        route: this.apartments.route + '/add',
        label_en: 'Add', 
        label_ar: 'اضافة'
    };

    listAllAppartments: IRouteModel = {
        route: this.apartments.route + '/list',
        label_en: 'List', 
        label_ar: 'الكل'
    };

    ViewApartment = (id?: number): IRouteModel => {
      return {
        route: id? this.apartments.route + '/' + id : this.apartments.route + '/:id',
        label_en: 'Apartment details', 
        label_ar: 'بيانات شقة'
      }
  };
}

export const appRoutes= RoutesModel.getInstance();