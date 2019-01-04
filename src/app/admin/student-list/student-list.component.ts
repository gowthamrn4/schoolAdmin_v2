import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  std=['12','11','10','9','8','7','6','5','4','3','2','1'];
  sec=['A','B','C','D','E','F','G','H','I','J','K'];
  findStudent:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
       /* spinner */
       this.spinnerConfig = {
        placement: SPINNER_PLACEMENT.block_window,
        animation: SPINNER_ANIMATIONS.spin_1,
        size: "8rem",
        color: "#1574b3"
    };
      /* end spinner */
  }
  /* find student by standard */
  findStd(value){
    this.showSpinner = true;
    let data = {
       standard:value    
    }
    console.log(value)
    this.dataservice.findStudentservice(value).subscribe(res=>{
    this.findStudent=res;
    this.showSpinner = false;    
    })
   }
   /* end find student standard*/

   /* delete student */
  del(value){
    let data = {
      _id:value._id,
      standard:value.standard,
      acadamicYear:value.officialDetails.acadamicYear,
      className:value.standard
    }
    console.log(data)
    this.dataservice.deleteStudentsservice(data).subscribe(res=>{
      this.findStudent=res;
    })
  }
   /* end delete student */
}
