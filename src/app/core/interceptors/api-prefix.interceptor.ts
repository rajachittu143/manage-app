import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req = req.clone({ url: 'https://dev-gcp-kong.dltk.ai/' + req.url });
        // req = req.clone({ url: environment.host + req.url });
        req = req.clone({ url: 'https://api.getbiz.app/api/' + req.url });
        return next.handle(req);
    }
}
