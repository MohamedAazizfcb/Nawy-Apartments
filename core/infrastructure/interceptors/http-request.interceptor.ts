import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export function httpRequestInterceptorFn(): HttpInterceptor {
  return {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const httpReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': 'Bearer YOUR_AUTH_TOKEN'
        })
      });
      return next.handle(httpReq);
    }
  };
}
