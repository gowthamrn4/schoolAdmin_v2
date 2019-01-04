import { Component, OnInit,ViewChild} from '@angular/core';
import { DataService } from '../../service/data.service';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  aUser:any;
  resMessage:any;
  getAllUser:any;
  find:any;
  delete:any;
  role1='admin';
  findStudent:any;

   
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    // this.dataservice.getUsers().subscribe(res=>{
    //   this.getAllUser = res;
    //   console.log(res);
    // })
  }
  /* Add User  */
  adduser(value){
    //  this.spinner.show();
     this.dataservice.adduserService(value).subscribe(res=>{
     this.aUser = res;
     console.log(value)
     this.resMessage = res.message;
    //  this.spinner.hide();
    //  this.childModal.show();
     })
  }
  /* End Add User */

  /* Hide Modal  */
  // hideChildModal(): void {
  //   this.childModal.hide();
  // }
  /* End Hide Modal */

  /* find user */
  findUser(value){
      // this.spinner.show();
      let data = {
        role:value
      }
      this.dataservice.finduserservice(data).subscribe(res=>{
      this.getAllUser =res;
        $.toast({
        heading: value,
        showHideTransition: 'slide',
        position: 'bottom-left',
        icon: 'success'
         });
      // this.spinner.hide();

      })
  }
  /* end find user */

  /* del user */
  del(value){
  //  this.spinner.show();
   let data = {
     _id:value._id,
     role:value.role
   }
   console.log(data)
   this.dataservice.deluser(data).subscribe(res=>{
     this.getAllUser=res;
    //  this.spinner.hide();
   })
  }
  /* end del user */


  /* if student user */
  Userstudent(value){
   this.role1=value.role;
  }
  /*  */

  /* send data for find student */
  findStd(value){
   let data = {
      standard:value    
   }
   this.dataservice.findStudentservice(data).subscribe(res=>{
   this.findStudent=res;
  
   })
  }
  /* end send data for find students */
}