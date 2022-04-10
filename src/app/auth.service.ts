
import { User } from "./User";
import { RegisterUser } from "./RegisterUser";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getToken(): any {
    const token = localStorage.getItem("access_token");
    return token;
  }

  public readToken(): User {
    const token = localStorage.getItem("access_token");
    return helper.decodeToken(token!);
  }

  public isAuthenticated(): Boolean {
    const token = localStorage.getItem("access_token");
    if (token) return true;
    else return false;
  }

  public login(user: User): Observable<any> {
    const url = `${environment.userAPIBase}/login`;
    return this.http.post<any>(url, user);
  }

  public logout() {
    localStorage.removeItem("access_token");
  }

  public register(registerUser: RegisterUser): Observable<any> {
    const url = `${environment.userAPIBase}/register`;
    return this.http.post<any>(url, registerUser);
  }
}
