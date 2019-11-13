import { Component, OnInit, ElementRef,ContentChild,AfterContentInit,ViewChild, Renderer2,AfterViewInit} from '@angular/core';
import  {UserService} from '../services/user.service';
import { ChildcommunicationComponent } from '../childcommunication/childcommunication.component';
import { TestDirectiveDirective } from '../appDirectives/test-directive.directive';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, AfterContentInit {

    userName;
    product:string ="Default Value"

  constructor(private _userService:UserService,private renderer:Renderer2) {
     // subscribe userservice fro subject behaviour method
    this._userService.userName.subscribe(uname=>{
      this.userName=uname
      console.log(this.userName)
})
   }
  // value will be come for this variable from the behaviour subject from service 




// content child property
@ContentChild('childCon',{static:true}) childparagraph:ElementRef
@ViewChild(TestDirectiveDirective,{static:true}) myDir:TestDirectiveDirective 

  ngOnInit() {
   
  }

ngAfterContentInit(){
  console.log("my contentchild",this.childparagraph)
  this.renderer.setStyle(this.childparagraph.nativeElement,'color',"blue")

}

  OnupdateUser(uname){
    this._userService.userName.next(uname.value)
  }



  viewchildAlert(){                                                                                                                                                                                                                                                                                                                                                                                                                                     
    alert(this.product)
  let text= this.renderer.createText("this text is created by renderer")
  this.renderer.appendChild(this.childparagraph.nativeElement,text)
  }

changeColor(color){
this.myDir.changeBg(color)
}

}
