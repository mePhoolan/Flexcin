import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,FormArray, Form} from '@angular/forms'
import { Observable } from 'rxjs';
import { reject } from 'q';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {



myReactiveForm:FormGroup
  genders=[
    {id:1,value:"Male"},
    {id:2,value:"Female"}
  ]
 
  nameNotAllow=[
    "Lalit",
    "Mala"
]

formStatus;

  constructor() { }


  ngOnInit() {
    this.myReactiveForm=new FormGroup({
          // nested form group
          'userDetail':new FormGroup({
          'username':new FormControl(null,[Validators.required, this.NaNames.bind(this)]),
          'email':new FormControl(null,[Validators.required,Validators.email],this.NaEmails),
         }),   
          'course':new FormControl('Angular'),
          'gender':new FormControl('Male'),
          'skills':new FormArray([
            new FormControl(null,Validators.required),
          ])
        
    })
    // valuechanges observable
// this.myReactiveForm.valueChanges.subscribe((value)=>
// console.log(value)

// statusChange observable
this.myReactiveForm.statusChanges.subscribe((status)=>{
  console.log(status)
  this.formStatus=status
})

// set value function
// setTimeout(()=>{
// this.myReactiveForm.setValue({
// userDetail:{
//     'username':'Adarsh',
//     'email':'Adarsh@gmail.com',
//   },
//     'course':'Angular',
//     'gender':'Female',
//     'skills':[
// 'Photoshop'
//     ]
// })

// },4000)

// patch value function

setTimeout(()=>{
  this.myReactiveForm.patchValue({
  userDetail:{
    'email':'Adarsh@gmail.com',
    },
  })
  
  },4000)




}









//  CUSTOM VALIDATION ON NAME
  NaNames(control:FormControl){
  if(this.nameNotAllow.indexOf(control.value)!==-1){
    return{'nameIsNotAllow':true}
  }
  return null
  }

// ASYNC VALIDATION ON EMAIL
NaEmails(control:FormControl):Promise<any> | Observable<any>{
  const myResponse=new Promise<any>((resolve,reject)=>{
  setTimeout(()=>
    {
     if(control.value=='neetu@gmail.com'){
       resolve({'emailIsNotAllowed':true})
     }
     else{
       resolve(null)
     }

    },1500)
  })
  return myResponse
}



onSubmit(){
  console.log(this.myReactiveForm)
  this.myReactiveForm.reset({
    userDetail:{
          'username':'',
          'email':'',
        },
          'course':'Angular',
          'gender':'Male',
          'skills':[
      ''
          ]

  })
}

onAddskills(){
  const control=new FormControl(null,Validators.required);
(<FormArray> this.myReactiveForm.get('skills'))
.push(control)
}
}
