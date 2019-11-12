import { Component, OnInit } from '@angular/core';
import  {UserService} from '../services/user.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

    product:string ="Default Value"

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

  viewchildAlert(){
    alert(this.product)
  }


}
