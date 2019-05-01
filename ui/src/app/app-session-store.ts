import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from './app-session-user-info'; 

@Injectable()
export class SessionStoreService {

    private dataSource = new BehaviorSubject<UserInfo>(new UserInfo());
    userInfo = this.dataSource.asObservable();

    constructor() { }

    updateUserDetails(currentUserInfo: UserInfo){
        this.dataSource.next(currentUserInfo);
    }
}