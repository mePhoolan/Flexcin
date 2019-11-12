import { Component, OnInit } from '@angular/core';
import  {UserService} from '../services/user.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private _msgService:UserService) { }

  ngOnInit() {
    // subscribe the users method
 
   }
      
  

  myMessage(msg){
  this._msgService.MessageAlert(msg)
}
}
