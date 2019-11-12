import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentcommunication',
  templateUrl: './componentcommunication.component.html',
  styleUrls: ['./componentcommunication.component.scss']
})
export class ComponentcommunicationComponent implements OnInit {

//   // product selected is a property for chekcing product seltecd or not

// // select product is a varible where selected product is bind
// //  selectedProduct:string
//  AddedtoCart:any;


  constructor() { }

  ngOnInit() {
  }

  proSelected:boolean=false
  sellProduct:string
  AddedtoCart:any;

  OnproductSelected(product){
    this.proSelected=true
     this.sellProduct=product
  }
 
  OnAddtoCart(proData){
 this.AddedtoCart=proData
  }
// // myname="Neetu dagar"
}
