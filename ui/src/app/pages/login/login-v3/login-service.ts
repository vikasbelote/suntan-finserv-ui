import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { LoginUserDetail } from "./login-user-detail";
import { UserDetail } from "../../register/register-user-detail";

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    validateUserDetail(userDetail: LoginUserDetail): Observable<UserDetail> {
        return this.http.post("http://localhost:8080/user/validate", userDetail)
        .map(res => <UserDetail>res.json());
    } 
}