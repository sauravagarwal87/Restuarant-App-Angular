import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private _http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name :[''],
      email :[''],
      mobile :[''],
      password :['']
    })
  }

  singUp(){
    this._http.post<any>("http://localhost:5000/signup",this.signupForm.value)
    .subscribe(res=>{
      alert("Registration Successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something Went Wrong");
    }
    )

  }

}
