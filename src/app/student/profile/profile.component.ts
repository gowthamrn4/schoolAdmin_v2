import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../service/share.service';
import {DataService} from '../../service/data.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  }
  user_details:any=[];
  getUser:any;
  session={
    username:''
  }
  update:any;
  constructor(private shareService:ShareService,private dataservice:DataService, private router : Router) { 
    this.user_details = this.shareService.getCurrentProfile();
   }

  ngOnInit() {
   
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
     console.log(this.find[i].personalDetails.motherTongue)

   }console.log(res)
   })
  }
  updatePersonal(){
    console.log(this.personalDetails);
    this.dataservice.updatepersonalDeatilsService(this.personalDetails).subscribe(res=>{this.update=res})
  }
}
