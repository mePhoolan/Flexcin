import { Component, OnInit } from '@angular/core';
import  {UserService} from '../services/user.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private _userService:UserService) { 
     // subscribe userservice fro subject behaviour method
    this._userService.userName.subscribe(uname=>{
      this.userName=uname
      console.log(this.userName)
})
   }
  // value will be come for this variable from the behaviour subject from service 
 userName;
  ngOnInit() {
  }

  OnupdateUser(uname){
    this._userService.userName.next(uname.value)
  }

}
