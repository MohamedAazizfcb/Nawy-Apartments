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
        label_en: 'apartments', 
        label_ar: 'الشقق'
    };

    addApartment: IRouteModel = {
        route: this.apartments.route + '/add',
        label_en: 'add', 
        label_ar: 'اضافة'
    };

    listAllAppartments: IRouteModel = {
        route: this.apartments.route + '/list',
        label_en: 'list', 
        label_ar: 'الكل'
    };

    ViewApartment: IRouteModel = {
      route: this.apartments.route + '/:id',
      label_en: 'apartment details', 
      label_ar: 'بيانات شقة'
  };
}

export const appRoutes= RoutesModel.getInstance();