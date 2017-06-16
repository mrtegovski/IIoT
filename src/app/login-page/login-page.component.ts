import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  invalidUser = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    let userEmail = '';
    let userPassword ='';
    this.form = this.formBuilder.group({
      email: [userEmail, Validators.email],
      password: [userPassword, Validators.required]
    });
   }
   logIn(){
     console.log(this.form.value);
     return this.invalidUser = true;
   }
}
