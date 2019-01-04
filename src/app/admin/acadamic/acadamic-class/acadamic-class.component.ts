import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
@Component({
  selector: 'app-acadamic-class',
  templateUrl: './acadamic-class.component.html',
  styleUrls: ['./acadamic-class.component.css']
})
export class AcadamicClassComponent implements OnInit {
  class:any=['12','11','10','9','8','7','6','5','4','3','2','1'];
  sec:any=['A','B','C','D','E','F','G','H','I','J','K'];
  AYear=['2010-2011','2011-2012','2012-2013','2013-2014','2014-2015','2015-2016','2016-2017','2017-2018','2018-2019','2019-2020','2020-2021','2021-2022','2022-2023','2023-2024','2024-2025','2026-2027','2027-2028','2028-2030','2030-2031','2031-2032'];
  addClass:any;
  findAcadamin:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
   
  }
  addAcadamic(value){
    let data = {
      className:value.className,
      acadamicYear:value.acadamicYear,
      section:value.section,
      totalStudents:value.totalStudents,
      classTeachers:value.classTeachers,
      availableSeats:value.totalStudents
    }
    this.dataservice.addClassservice(data).subscribe(res=>{
   this.addClass=res;
   })
  }

  /* find class */
  find(value){
    let data = {
      acadamicYear:value
    }
    this.dataservice.findclassservice(data).subscribe(res=>{
    this.findAcadamin=res;
    })
  }
  
  /* end find class */

  /* delete class */
 del(value){
   let data = {
     _id:value._id,
     acadamicYear:value.acadamicYear
   }
   this.dataservice.deleteclassservice(data).subscribe(res=>{
     this.findAcadamin=res
   })
 }
  /* end delete class */
}
