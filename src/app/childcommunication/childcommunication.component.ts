import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcommunication',
  templateUrl: './childcommunication.component.html',
  styleUrls: ['./childcommunication.component.scss']
})
export class ChildcommunicationComponent implements OnInit {


  constructor() { }

  ngOnInit() {


  }
// property bindign by input decerrator in component custom property

// @Input() placeHolderText:string="Search in text"


// OnproductSelected(product){
//   this.productSelected=true
//   this.selectedProduct=product
// }


// @input decerator is used for send the from parent to child
@Input() productSelected:boolean=false
@Input() selectedProduct:string
 
// Output decorator fro send data from child to component
@Output() AddedtoCart=new EventEmitter<any>();


OnaddtoCart(){
  this.AddedtoCart.emit(this.selectedProduct)
}

}
