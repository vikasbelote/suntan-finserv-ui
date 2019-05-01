import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';
import { AppComponent }  from '../../../app.component';
import { RegisterService } from '../register-service';
import { UserDetail } from '../register-user-detail';
import swal from 'sweetalert2';

@Component({
    selector: 'register-v3',
    templateUrl: './register-v3.html'
})
export class RegisterV3Page {

  public userDetail: UserDetail;

  constructor(private app: AppComponent, private router: Router, private register: RegisterService) {
      app.setPageSettings({
        pageEmpty: true,
        pageBodyWhite: true
      });
  }

  formSubmit(f: NgForm) {

    this.userDetail = new UserDetail();
    this.userDetail["firstName"] = f.controls["firstName"].value;
    this.userDetail["lastName"] = f.controls["lastName"].value;
    this.userDetail["password"] = f.controls["password"].value;
    this.userDetail["userName"] = f.controls["userName"].value;

    this.register.saveUser(this.userDetail).subscribe(res => {
      this.swalSuccess("User is created");
      this.router.navigate(['login']);
    },
    err => {
      console.log(err);
      this.swalDanger();
    });
  }

  swalSuccess(description) {
    swal('Success', description, 'success');
    
	}

  swalWarning() {
    swal('Warning', 'description here', 'warning');
	}

  swalDanger() {
    swal('Error',"Something went wrong", 'error');
	}

}
