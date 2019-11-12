import { Component, OnInit,ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import  {UserService} from '../services/user.service';
 import { Comp1Component } from '../comp1/comp1.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,AfterViewInit{
  // users:{}=[];
  username:string="Flexcin"
  myname;
    
  // viewchild for same component
  @ViewChild('box',{static:true}) box: ElementRef;
   // access the property ofchild component by viewchild method
   @ViewChild(Comp1Component,{static:true}) child:Comp1Component
 
  constructor(private _userService:UserService) {
    // for behaviour subject
//     this._userService.userName.subscribe(uname=>{
//       this.username=uname
//       console.log(this.username)
// })
   }

  ngAfterViewInit(){
    console.log("this is my box",this.box)
    this.box.nativeElement.style.backgroundColor="blue"
    this.box.nativeElement.classList="blue"
    console.log("this is my child view component data",this.child)
    // this.box.nativeElement.innerHTML="this is working"
    // this.box.nativeElement.nodeValue=70
  }


  ngOnInit() {
  

  //   this._userService.user().subscribe(mydata=>{
  //     this.users=mydata
  //     console.log(this.users)
  //  })
   }
  //  access the component1 name property by viewchild
   changeChildProperty(){
    this.child.product="Neetu dagar"
   }
// acess the component 1 method by viewchild
   changeChildMethod(){
  this.child.viewchildAlert()
   }

statusOnline:boolean=true


  
}
