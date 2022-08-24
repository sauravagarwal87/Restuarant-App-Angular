import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient,private router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  logIn(){
    this._http.get<any>("http://localhost:5000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      const WrongPassword = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password !== this.loginForm.value.password
      })
      if(WrongPassword){
        alert("Please enter the correct Password");
      }
      else if(user){
        alert("Login Succesfully");
        this.loginForm.reset();
        this.router.navigate(['restaurant'])
      }else{
        alert("User Not Found")
      }
    },err=>{
      alert("Something Went Wrong")
    })

  }

}
