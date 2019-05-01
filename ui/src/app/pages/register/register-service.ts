import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { UserDetail } from "./register-user-detail";

@Injectable()
export class RegisterService {

    constructor(private http: Http) { }

    saveUser(userDetail: UserDetail) : Observable<UserDetail> {
        return this.http.post("http://localhost:8080/postUser", userDetail)
        .map(res => <UserDetail>res.json());
    }

}