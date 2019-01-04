import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../service/share.service';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent implements OnInit {
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
    console.log(this.session.username) ;

    /*  show msg */
    $.toast({
      heading: 'Welcome'+"_" +this.session.username,
      showHideTransition: 'slide',
      position: 'bottom-right',
      icon: 'success'
       });
    /* end show msg */
    }
    logout(){
      localStorage.removeItem('currentUser');
      localStorage.removeItem('userdetails');
      $.toast({
        heading: 'Bye'+"_" +this.session.username,
        showHideTransition: 'slide',
        position: 'top-center',
        icon: 'success'
         });
      this.router.navigate(['/login'])
    
      }
  }


