import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../service/share.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentlanding',
  templateUrl: './studentlanding.component.html',
  styleUrls: ['./studentlanding.component.css']
})
export class StudentlandingComponent implements OnInit {

  user_details:any=[];
  getUser:any;
  session={
    username:''
  }
  constructor(private shareService:ShareService,private router : Router) { 
    this.user_details = this.shareService.getCurrentProfile();
   }

  ngOnInit() {
    // this.shareService.getCurrentProfile().subscribe(res=>{
    //  this.getUser =res;
    //  console.log(res);
    var name = JSON.parse(localStorage.getItem("userdetails"));
    this.session.username = name.user.username;
    console.log(this.session.username) 
    }
    logout(){
      localStorage.removeItem('currentUser');
      localStorage.removeItem('userdetails')
      this.router.navigate(['/login'])
    
      }

}
