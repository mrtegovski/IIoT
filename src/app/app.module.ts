import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdInputModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule, MdCardModule, MdProgressBarModule, MdCheckboxModule } from '@angular/material';
 
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersService } from "app/login-page/users.service";
import { appRouting } from "app/app.routing";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,
    MdCheckboxModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
