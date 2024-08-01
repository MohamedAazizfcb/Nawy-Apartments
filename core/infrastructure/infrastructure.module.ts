import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpRequestInterceptorFn } from "./interceptors/http-request.interceptor";
import { NgModule } from "@angular/core";

@NgModule({
    providers: [
      { 
        provide: HTTP_INTERCEPTORS, 
        useFactory: httpRequestInterceptorFn, 
        multi: true 
      }
    ],
})
class interceptorsProviderModule {}

export { interceptorsProviderModule }

