import { Component, Injectable } from '@angular/core';
import { NgForm,FormControl } from '@angular/forms';
import { Profile } from './profile-model';
import { InvestorProfileService } from './investor-profile-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './investor-profile.html'
})
export class InvestorProfile {

  private profile: Profile;

  constructor(private investorProfileService: InvestorProfileService) {}

  formSubmit(f: NgForm) {
    this.profile = new Profile();
    this.profile["firstName"] = f.controls["firstName"].value;
    this.profile["middleName"] = f.controls["middleName"].value;
    this.profile["lastName"] = f.controls["lastName"].value;
    this.profile["emailAddress"] = f.controls["emailAddress"].value;
    this.profile["mobileNumber"] = f.controls["mobileNumber"].value;
    this.profile["panCard"] = f.controls["panCard"].value;
    this.profile["adharNumber"] = f.controls["adharNumber"].value;
    this.profile["accountNumber"] = f.controls["accountNumber"].value;
    this.profile["accountType"] = f.controls["accountType"].value;
    this.profile["ifscCode"] = f.controls["ifscCode"].value;
    this.profile["branch"] = f.controls["branch"].value;
    this.profile["addressText"] = f.controls["addressText"].value;
    this.profile["city"] = f.controls["city"].value;
    this.profile["state"] = f.controls["state"].value;
    this.profile["pincode"] = f.controls["pincode"].value;

    this.investorProfileService.saveInvestorProfile(this.profile).subscribe(res => {
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
