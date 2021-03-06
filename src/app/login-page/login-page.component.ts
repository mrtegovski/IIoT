import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { UsersService } from "app/login-page/users.service";
import { Router } from "@angular/router";
import { HeaderComponent } from "app/header/header.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  invalidUser = false;
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder, 
    private uService: UsersService,
    private router: Router,
    private hc: HeaderComponent 
    ) {
    let userEmail = '';
    let userPassword = '';
    this.form = this.formBuilder.group({
      email: [userEmail, Validators.email],
      password: [userPassword, Validators.required]
    });
  }
  logIn() {
    this.hc.hideLoader = false;
    this.uService.getUser().subscribe((data: any) => {
      if (data.email == this.form.value.email && data.password == this.form.value.password) {
        this.router.navigate(['home']);
        return;
      }
      this.hc.hideLoader = true;
      return this.invalidUser = true;
    });
  }

}
