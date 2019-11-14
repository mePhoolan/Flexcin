import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  nameSearch:string="";
  
  constructor() { }

  ngOnInit() {
  }

productArray=[
  {sno:1,name:"Mobile",price:6556554,availability:"Available"},
  {sno:2,name:"TV",price:6565632,availability:"Not available"},
  {sno:3,name:"Washing Machine",price:6556554,availability:"Available"},
  {sno:4,name:"Mobile(nokia)",price:113334,availability:" Not available"},
  {sno:5,name:"TV(Dish)",price:677777,availability:"Available"},
  {sno:6,name:"Mobile(realme)",price:887978,availability:" Not available"}
]
  // {sno:7,name:"Washing Machine(ultra)",price:6556554,availability:"available"},
  // {sno:8,name:"Mobile(sumsung)",price:798888,availability:" Not available"},
  // {sno:9,name:"TV(tecna)",price:769659,availability:"Available"},
  // {sno:10,name:"Mobile(apple)",price:769070,availability:" Not available"},
  // {sno:11,name:"Mobile(moto)",price:898088,availability:"Available"},
  // {sno:12,name:"Washing Machine(white)",price:686556,availability:" Not available"},
  // {sno:13,name:"Mobile((readme)",price:888888,availability:"Available"},
  // {sno:14,name:"Mobile(reliace)",price:1987734,availability:"Not available"},


  // pure change method
  OnproductAdd(product){
  this.productArray.push(
    {sno:7,
    name:product.value,
    price:40000,
    availability:" Not Available"})
   console.log(product.name)
  }

  




}
