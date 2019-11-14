import { Component, OnInit,ViewChild, ElementRef,AfterViewInit,Renderer2,HostListener } from '@angular/core';
import  {UserService} from '../services/user.service';
 import { Comp1Component } from '../comp1/comp1.component';


//  declare var $:any; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit,AfterViewInit{
  
  // users:{}=[];
  username="Flexcin"
  name="Parvinder"
  myname;
    
  
  // viewchild for same component
  @ViewChild('box',{static:true}) box: ElementRef;
   // access the property ofchild component by viewchild method
   @ViewChild(Comp1Component,{static:true}) child:Comp1Component
 

  constructor(private _userService:UserService,private renderer:Renderer2) {
//     for behaviour subject
    this._userService.userName.subscribe(uname=>{
      this.username=uname
      console.log(this.username)
})
   }

  ngAfterViewInit(){
    console.log("this is my box",this.box)
    // renderer is used for manipulate the dom property
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','green')
    this.renderer.setStyle(this.box.nativeElement,'color','white')
    this.renderer.addClass(this.box.nativeElement,'myclass')
    this.renderer.setAttribute(this.box.nativeElement,'title',"this is test title")
    // this.box.nativeElement.style.backgroundColor="blue"
    // this.box.nativeElement.classList="blue"
    // console.log("this is my child view component data",this.child)
    // this.box.nativeElement.innerHTML="this is working"
    // this.box.nativeElement.nodeValue=70
  }
  // host listner 
   
   @HostListener('window:scroll',['$event']) myScroll(){
    let num=1;
     num=num+1;
     console.log(num)
   }

   
  ngOnInit() {
  
  //  $(window).scroll(function(){
  //  console.log("this is scrolling")
  //  })

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


// host listener used in component
@HostListener('click') myClick(){
  alert('clicked')

}



statusOnline:boolean=true


  
}
