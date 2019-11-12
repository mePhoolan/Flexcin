import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,Subject,BehaviorSubject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

url="https://jsonplaceholder.typicode.com/users"
message:string=""
users:[]

MessageAlert(value){
this.message=value
alert ("Please  Know more about" +this.message )
}

// featch data by http or obsevable method from server
user(): Observable<any>{
  return this.http.get(this.url)

} 

// subject  for  update the data in each multiplecomponent it is can not be intiliaze 
// userName=new Subject<any>()

// Behavior subject can intilaize in servie at one place and update data from service
userName=new BehaviorSubject('Neetu Dagar')
}