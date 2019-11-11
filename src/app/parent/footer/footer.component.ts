import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


// ngfor directives

houses=[
  {
    houselocation:"America",Name:"Json",Prize:567996.78,Agentcommission:5866.00,Investors:"Turki"
  },
  {
    houselocation:"Albama",Name:"Mehul",Prize:55596.48,Agentcommission:6886.00,Investors:"Ingland"
  },
  {
    houselocation:"Washington",Name:"Hmalton",Prize:2224477.08,Agentcommission:6766.00,Investors:"Russia"
  },
   {
   houselocation:"Istumbul",Name:"Josef",Prize:98899.98,Agentcommission:3866.00,Investors:"America"
  }
]

  
users=[]

OncreateUser(username){
this.users.push({
  name:username.value
})
// if(this.users.length>4){
//   // prompt("Limit exceed more than 4")
//   this.router.navigate(['parent/header'])

// }
}

// remove name by from last
Onremove(username){
  console.log(this.users.splice(this.users.length-1))
}

// remove item by index
RemoveItemBYindex(index){
  console.log(this.users.splice(index,1))
}
}
