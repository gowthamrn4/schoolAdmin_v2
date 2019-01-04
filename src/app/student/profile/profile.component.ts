import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../service/share.service';
import {DataService} from '../../service/data.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  find:any;
  personalDetails:any={
    aaadharNumber: '',
    bloodgroup: '',
    caste: '',
    dateOfBirth: '',
    firstName:'',
    gender: '',
    lastName: '',
    motherTongue: '',
    nationality: '',
    religion: '',
    rollno:''
  };
  contactDetails:any={
    permanentAddress:'',
    presentAddress:'',
    city:'',
    country:'',
    mobileNumber:'',
    phoneNumber:'',
    pinCode:'',
    state:'',
    rollno:''
  };
  ParentsDetails:any={
    faadharNumber:'',
    fatherName:'',
    fjob:'',
    fmobileNumber:'',
    maadharNumber:'',
    mjob:'',
    mmobileNumber:'',
    motherName:'',
    rollno:''
  }
  user_details:any=[];
  getUser:any;
  session={
    username:''
  }
  update:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  constructor(private shareService:ShareService,private dataservice:DataService, private router : Router) { 
    this.user_details = this.shareService.getCurrentProfile();
   }

  ngOnInit() {
   
    /* spinner */
    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_1,
      size: "8rem",
      color: "#1574b3"
  };
    /* end spinner */
    // this.shareService.getCurrentProfile().subscribe(res=>{
    //  this.getUser =res;
    //  console.log(res);
    var name = JSON.parse(localStorage.getItem("userdetails"));
    this.session.username = name.user.username;
    console.log(this.session.username) ;
    let data = {
      rollno:name.user.rollno
    }
   this.dataservice.getCurrentStudent(data).subscribe(res=>{
   this.find=res;
   for(let i=0;i<this.find.length;i++){
     /* set personal details */
     this.personalDetails.firstName = this.find[i].personalDetails.firstName;
     this.personalDetails.lastName = this.find[i].personalDetails.lastName;
     this.personalDetails.bloodgroup = this.find[i].personalDetails.bloodgroup;
     this.personalDetails.dateOfBirth = this.find[i].personalDetails.dateOfBirth;
     this.personalDetails.nationality = this.find[i].personalDetails.nationality;
     this.personalDetails.motherTongue =this.find[i].personalDetails.motherTongue;
     this.personalDetails.religion =this.find[i].personalDetails.religion;
     this.personalDetails.caste =this.find[i].personalDetails.caste;
     this.personalDetails.gender =this.find[i].personalDetails.gender;
     this.personalDetails.aaadharNumber=this.find[i].personalDetails.aaadharNumber;
     this.personalDetails.rollno=this.find[i].rollno;
     console.log(this.find[i].personalDetails.motherTongue);
     /* end set personal details */

     /* set contact details */
     this.contactDetails.permanentAddress=this.find[i].contactDetails.permanentAddress;
     this.contactDetails.presentAddress=this.find[i].contactDetails.presentAddress;
     this.contactDetails.city=this.find[i].contactDetails.city;
     this.contactDetails.state=this.find[i].contactDetails.state;
     this.contactDetails.mobileNumber=this.find[i].contactDetails.mobileNumber;
     this.contactDetails.phoneNumber=this.find[i].contactDetails.phoneNumber;
     this.contactDetails.pinCode=this.find[i].contactDetails.pinCode;
     this.contactDetails.country=this.find[i].contactDetails.country;
     /* end set contact details */

     /* set parents details */
     this.ParentsDetails.faadharNumber=this.find[i].fatherDetails.faadharNumber;
     this.ParentsDetails.fatherName=this.find[i].fatherDetails.farherName;
     this.ParentsDetails.fmobileNumber=this.find[i].fatherDetails.fmobileNumber;
     this.ParentsDetails.fjob=this.find[i].fatherDetails.fjob;
     this.ParentsDetails.maadharNumber=this.find[i].motherDetails.maadharNumber;
     this.ParentsDetails.motherName=this.find[i].motherDetails.motherName;
     this.ParentsDetails.mjob=this.find[i].motherDetails.mjob;
     this.ParentsDetails.mmobileNumber=this.find[i].motherDetails.mmobileNumber;
     this.ParentsDetails.rollno=this.find[i].rollno;
     /* end set parents details */
   }console.log(res)
   })
  }
  updatePersonal(){
    this.showSpinner = true;
    console.log(this.personalDetails);
    this.dataservice.updatepersonalDeatilsService(this.personalDetails).subscribe(res=>{
      this.update=res;
      this.showSpinner = false;
    })
  }
  /* update contact details */
  updateContactDetails(){
    this.showSpinner = true;
    this.dataservice.updatecontact(this.contactDetails).subscribe(res=>{
      this.update=res;
      this.showSpinner = false;    
    })
  }
  /* end update contact details */

  /* update parents details */
  updateparentDetails(){
    this.showSpinner = true;
    this.dataservice.updateParentsDetails(this.ParentsDetails).subscribe(res=>{
      this.update=res;
      this.showSpinner = false;    
    })
  }
  /* end update parents details */
}
