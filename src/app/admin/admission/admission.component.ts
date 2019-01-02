import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataService } from '../../service/data.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  AYear=['2010-2011','2011-2012','2012-2013','2013-2014','2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020','2020-2021','2021-2022','2022-2023','2023-2024','2024-2025','2026-2027','2027-2028','2028-2030','2030-2031','2031-2032']
  class:any=['12','11','10','9','8','7','6','5','4','3','2','1'];
  States=['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Pondicherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttaranchal','Uttar Pradesh','West Bengal']
  hostel=true;    /* show hostel form */
  transport=true; /* show transport form */
  @ViewChild('myForm') formValues;
  admission:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }
  showHostelForm(value){
    this.hostel = value
  }
  showTransportForm(value){
   this.transport = value
  }
  addStudents(value){
    let data = {
      standard:value.standard,
      classSection:value.classSection,
      rollno:value.rollno,
      
      officialDetails:{
        acadamicYear:value.acadamicYear,
        registerNumber:value.registerNo,
        joiningDate:value.joiningDate
       },
      personalDetails:{
        firstName:value.firstName,
        lastName:value.lastName,
        dateOfBirth:value.dob,
        gender:value.gender,
        bloodgroup:value.bloodgroup,
        nationality:value.nationality,
        motherTongue:value.motherTongue,
        religion:value.religion,
        caste:value.caste,
        aaadharNumber:value.aaadharNumber 
      },
      contactDetails:{
        permanentAddress:value.permanentAddress,
        presentAddress:value.presentAddress,
        city:value.cityName,
        pinCode:value.pinNumber,
        country:value.country,
        state:value.state,
        phoneNumber:value.phone,
        mobileNumber:value.mobileNumber,
      },
      fatherDetails:{
        farherName:value.farherName,
        fmobileNumber:value.fmobileNumber,
        faadharNumber:value.faadharNumber,
        fjob:value.fjob
      },
      motherDetails:{
        motherName:value.motherName,
        mmobileNumber:value.mmobileNumber,
        maadharNumber:value.maadharNumber,
        mjob:value.mjob
      }

    }
    console.log(data);
    this.dataservice.addStudentservice(data).subscribe(res=>{
      this.admission =res;
    })
  }
}
