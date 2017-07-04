import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdInputModule, MdDatepickerModule, MdNativeDateModule, MdButtonModule, MdCardModule, MdProgressBarModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdIconModule } from '@angular/material';
 
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersService } from "app/login-page/users.service";
import { appRouting } from "app/app.routing";
import { HomePageComponent } from './home-page/home-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavMenuComponent,
    HeaderComponent
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
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
