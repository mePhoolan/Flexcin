import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

statusOnline:boolean=true

users=[
  
  {
    name:"Neetu"
  },
  {
    name:"Json"
  },
  {
    name:"Mehul"
  },
  {
    name:"Json"
  },
  {
    name:"Marry"
  },
  {
    name:"Cocktail"
  },
]
}
