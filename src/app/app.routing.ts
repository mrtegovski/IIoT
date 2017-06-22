import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "app/login-page/login-page.component";
import { HomePageComponent } from "app/home-page/home-page.component";

const APP_ROUTES : Routes = [
    {path: '', component: LoginPageComponent, data:{showNav: false}},
    {path: 'home', component: HomePageComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]

export const appRouting = RouterModule.forRoot(APP_ROUTES);