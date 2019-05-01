import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl } from '@angular/forms';
import { Profile } from './profile-model';
import { InvestorProfileService } from './investor-profile-service';
import swal from 'sweetalert2';
import { SessionStoreService } from '../../app-session-store';

@Component({
  selector: 'app-profile',
  templateUrl: './investor-profile.html'
})
export class InvestorProfile implements OnInit {

  public profile: Profile;

  constructor(private investorProfileService: InvestorProfileService, private sessionStore: SessionStoreService) {}

  ngOnInit() {
    this.sessionStore.userInfo.subscribe(userInfo => {
      this.investorProfileService.getInvestorProfile(userInfo.userId).subscribe(res => {
        this.profile = <Profile>res;
      },
      err => {
        this.swalDanger();
      });
    });
  }

  formSubmit(f: NgForm) {
    this.investorProfileService.saveInvestorProfile(this.profile).subscribe(res => {
      this.profile = <Profile>res;
      this.swalSuccess("Investor profile is save successfully.");
    },
    err => {
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
