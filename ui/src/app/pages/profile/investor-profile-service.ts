import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Profile } from "./profile-model";

@Injectable()
export class InvestorProfileService {

    constructor(private http: Http){}

    saveInvestorProfile(profile: Profile) : Observable<Profile> {
        return this.http.post("http://localhost:8080/investor/profile", profile)
        .map(res => <Profile>res.json());
    }

}