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


genders=[
  {id:1,value:"Male"},
  {id:2,value:"Female"}
]

defaultGender="Male"
submitted=false

@ViewChild('myform',{read:NgForm,static:true}) myForm:any

  constructor() { }

  ngOnInit() {
     console.log(this.myForm)
  }

// bind data and show at frontend

  formData={
    username:'',
    email:'',
    course:'',
    gender:'',
  }
  


 onSubmit(form:NgForm){
   console.log(this.myForm.value)
   this.submitted=true
   this.formData.username=this.myForm.value.userDetail.username
   this.formData.email=this.myForm.value.userDetail.email
   this.formData.course=this.myForm.value.course
   this.formData.gender=this.myForm.value.gender
   this.myForm.reset();
 }  





// set value and patch value method
setUsername(){
  // this.myForm.setValue({
  //   // userDetail:{
  //   //   username:'Neetu dagar',
  //   //   email:""
  //   // },
  //   // course:"Angular",
  //   // gender:'Male'
    
  // })

this.myForm.form.patchValue({
  userDetail:{
    username:"Neetu dagar",
  }
})

}
}