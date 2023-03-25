import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthorizationService } from '../authorization-service/authorization.service';
import { switchMap, take, exhaustMap } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthorizationService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ) {
    if (req.url.match("http://127.0.0.1:8000/.+")) {
      return next.handle(req);
    }
    else {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user || !user.token) return next.handle(req);

        const modifiedRequest = req.clone({params: new HttpParams().set('auth', user.token)})
        return next.handle(modifiedRequest);
      })
    );
  }
}
}
