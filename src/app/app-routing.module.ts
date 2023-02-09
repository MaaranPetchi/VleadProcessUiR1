import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/LandingPage/header/header.component';
import { LandingpageComponent } from './Components/LandingPage/landingpage/landingpage.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [{path:"home", component:LandingpageComponent},
{path:"login", component:LoginComponent}, 
{path:"header", component:HeaderComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
