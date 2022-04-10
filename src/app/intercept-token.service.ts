import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InterceptTokenService implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("spotify.com"))
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${this.auth.getToken()}`,
        },
      });
    return next.handle(request);
  }
}
