import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent }  from '../../../app.component';
import { LoginUserDetail } from './login-user-detail';
import { LoginService } from './login-service';
import swal from 'sweetalert2';
import { SessionStoreService } from '../../../app-session-store';
import { UserInfo } from '../../../app-session-user-info';

@Component({
    selector: 'login-v3',
    templateUrl: './login-v3.html'
})

export class LoginV3Page {

  public userDetail: LoginUserDetail;

  constructor(private app: AppComponent, private router: Router, private loginSerice: LoginService,
    private sessionStore: SessionStoreService) {
      app.setPageSettings({
        pageEmpty: true,
        pageBodyWhite: true
      });
  }

  formSubmit(f: NgForm) {

    this.userDetail = new LoginUserDetail();
    this.userDetail["password"] = f.controls["password"].value;
    this.userDetail["userName"] = f.controls["userName"].value;

    this.loginSerice.validateUserDetail(this.userDetail).subscribe(res => {
      if(res.userName != null) {
        this.router.navigate(['dashboard/v1']);

        let userInfo = new UserInfo();
        userInfo.userId = res.userId;
        userInfo.firstName = res.firstName;
        userInfo.lastName = res.lastName;
        userInfo.userName = res.userName
        this.sessionStore.updateUserDetails(userInfo);
      }
      else {
        this.swalInfo();
      }
    },
    err => {
      this.swalDanger();
    });
  }

  swalSuccess(description) {
    swal('Success', description, 'success');
    
	}

  swalInfo() {
    swal('Info', 'Provided user name and password does not exit', 'info');
	}

  swalDanger() {
    swal('Error',"Something went wrong", 'error');
	}
}
