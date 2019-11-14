import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {



defaultCourse="Angular"
username="";

@ViewChild('myform',{read:NgForm,static:true}) myForm:any

  constructor() { }

  ngOnInit() {
     console.log(this.myForm)
  }

 onSubmit(form:NgForm){
   console.log(this.myForm.value)
 }  
}
