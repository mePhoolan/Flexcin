import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

message:string=""
message2:string=""

Isvalid:boolean=false
selectedValue:string
  ngOnInit() {
  }


  addHousebuyer(){
     this.message="product added to cart"
     console.log(this.message)
  }


// event binding  function
InputEvent(event){
  this.message2=`${event.target.value}` + "Product added to cart"
  console.log(this.message2)
  console.log(event)
}


// tempalate referncxe variable access 
Myinfo(my){
  console.log(my.name,my.value)
  }

// for ngif property function
MyngIf(){
  this.Isvalid=true
}

SwitchDirective(val){
  this.selectedValue=val.target.value
  console.log(this.selectedValue)
}

// ngfor directive 



}
