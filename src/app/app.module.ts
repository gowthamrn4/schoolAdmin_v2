import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from '@hardpool/ngx-spinner';

import { DataService } from './service/data.service';
import { ShareService } from './service/share.service';

import { LoginComponent } from './login/login.component';

/* admin page component */
import { AdminlandingComponent } from './admin/adminlanding/adminlanding.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { AdmissionComponent } from './admin/admission/admission.component';
import { HomeComponent } from './admin/home/home.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { AcadamicClassComponent } from './admin/acadamic/acadamic-class/acadamic-class.component';

/* end admin page component */

/* student user component */
import { StudentlandingComponent } from './student/studentlanding/studentlanding.component';
import { ShomeComponent } from './student/shome/shome.component';
import { ProfileComponent } from './student/profile/profile.component';

/* end student user component */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminlandingComponent,
    AddusersComponent,
    AdmissionComponent,
    HomeComponent,
    StudentlandingComponent,
    ShomeComponent,
    ProfileComponent,
    StudentListComponent,
    AcadamicClassComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxSpinnerModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path:'login',component:LoginComponent },
      { path:'',pathMatch:'full',redirectTo:'login'},
      { path:'admin',component:AdminlandingComponent,
      children:[
        { path:'home',component:HomeComponent },
        { path:'',pathMatch:'full',redirectTo:'home'},
        { path:'addusers',component:AddusersComponent },
        { path:'admission',component:AdmissionComponent },
        { path:'studentList',component:StudentListComponent },
        { path:'acadamic_class',component:AcadamicClassComponent }
      ]},
      { path:'studentlanding',component:StudentlandingComponent,
    children:[
      { path:'studentHome',component:ShomeComponent } ,
      { path:'sprofile',component:ProfileComponent }   
        ]}
    ])
  ],
  providers: [DataService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
