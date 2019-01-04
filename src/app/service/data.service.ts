import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, XHRBackend } from '@angular/http';
import { resource } from 'selenium-webdriver/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
@Injectable()
export class DataService {

  
    loginService:any;   /* Login  */
    adduserdata:any;    /* add user */
    getalluser:any; /* Get all User */
    findusers:any; /* find users */
    deleteuser:any /* delete user */
    addclass:any; /* add adcaclass */
    findClassName:any; /* find class name */
    deleteClass:any; /* delete class */
    addmissionStudent:any; /* admission student data */
    findstd:any; /* find student by std */
    findstd1:any;
    updatepersonaldata:any; /* update personal data */
    deleteStudent:any /* delete student */
    checkadmission:any; /* check admission avalible seats */
    // baseURL='https://schooladminwebapp.herokuapp.com'
    baseURL='http://localhost:3000'

    constructor(public http:Http) {
     
     }
   /* Login Service */
   login(value){
    return this.http.post(this.baseURL+'/users/login',value)
    .map(result=>this.loginService=result.json())
  }
   /** End Login */

   /* add user */
   adduserService(value){
     return this.http.post(this.baseURL+'/users/adduser',value)
     .map(result=>this.adduserdata=result.json())
   }
   /* end add user */

   /* Get All User */
   getUsers(){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.get(this.baseURL+'/users/getusers',options)
     .map(result=>this.getalluser=result.json())
   }
   /* End get all user */

   /* find User */
   finduserservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/users/finduser',value,options)
     .map(result=>this.findusers=result.json())
   }
   /* end find user */
  

   /* delete user */
    deluser(value){
      const stoken = localStorage.getItem('currentUser');
      const ptoken = JSON.parse(stoken);
      const token = ptoken.token;
      const headers = new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token
      });
       const options = new RequestOptions({ headers: headers });
       return this.http.post(this.baseURL+'/users/delusers',value,options)
       .map(result=>this.deleteuser=result.json())
    }
   /* end delete user */

   /* add acadamic-class */
   
   addClassservice(value){
    return this.http.post(this.baseURL+'/class/cretaeClass',value)
    .map(result=>this.addclass=result.json())
   }

   /* end add acadamic-class */

   /* find class */
   findclassservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/class/findClass',value,options)
     .map(result=>this.findClassName=result.json())
   }
   /* end find class */


   /*  delete class */
   deleteclassservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/class/delclass',value,options)
     .map(result=>this.deleteClass=result.json())
   }
   /* end delete class */


   /* add students */

   addStudentservice(value){
      return this.http.post(this.baseURL+'/student/addStudents',value)
      .map(result=>this.addmissionStudent=result.json())
   }
   /* end add students */
   
   /*  delete Students */
   deleteStudentsservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/deleteStudents',value,options)
     .map(result=>this.deleteStudent=result.json())
   }
   /* end delete students */

   /* find student By standard */
   findStudentservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/findStudent',value,options)
     .map(result=>this.findstd=result.json())
   }
   /* end find students by standard */

   /* find current user as student */
   getCurrentStudent(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/currentStudent',value,options)
     .map(result=>this.findstd=result.json())
   }
   /* end find current user as student */


   /* update personal details */
   updatepersonalDeatilsService(value){
    return this.http.post(this.baseURL+'/student/updatepersonal',value)
    .map(result=>this.updatepersonaldata=result.json())
   }
   /* end update personal details */

   /* update contact details */
   updatecontact(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/updateContactDetails',value,options)
     .map(result=>this.findstd=result.json())
   }
   /* end update contact details */

   /* update parents details */
   updateParentsDetails(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/updateParents',value,options)
     .map(result=>this.findstd=result.json())
   }
   /* end update parents details */

  /* check admission. avaliable seats */
  checkAdmisionservice(value){
    const stoken = localStorage.getItem('currentUser');
    const ptoken = JSON.parse(stoken);
    const token = ptoken.token;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this.baseURL+'/student/checkadmissionseats',value,options)
     .map(result=>this.checkadmission=result.json())
  }
  /* end check admission avalaible seats */
}