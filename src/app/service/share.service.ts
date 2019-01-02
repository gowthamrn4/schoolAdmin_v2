import { Injectable } from '@angular/core';
@Injectable()
export class ShareService {

    user:any
    currentProfile:any;
    constructor() { }
    // setUser(value){
    //     this.user=value
    // }
    setCurrentProfile(value){
        this.currentProfile=value;
        console.log(value)
    }
    getCurrentProfile(){
        return this.currentProfile;
    }
}