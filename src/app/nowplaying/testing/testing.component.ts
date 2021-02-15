import { Component, OnInit } from '@angular/core';


interface User{
  firstName: string,
  lastName: string,
  email: string,
  isAdmin: boolean
}
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {
  
  data:User|string;
  constructor() { }

  ngOnInit(): void {
    this.jamalFunc("Jamal","Hussain").then(data=>{
      this.data = data;
    }).catch(err=>{
      this.data = err;
    });
  }
  checkType = (data:any):boolean=>{
    if(typeof data ==='object'){
      return true;
    }else{
      return false;
    }
  }
  jamalFunc = async(firstName:string,lastName:string):Promise<User|string>=>{
    return new Promise((resolve, reject)=>{
      const fullName = firstName.concat(" ").concat(lastName);
      if(fullName==="Jamal Hussain"){
        setTimeout(() => {
          return resolve({
            firstName:firstName,
            lastName:lastName,
            email:"jamalhussayn@gmail.com",
            isAdmin:false
          });
        },200);
      }else{
        return reject("Sorry your name is not correct and you should provide correct name");
      }
    });
  }

}
