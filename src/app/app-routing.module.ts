import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },

  {
    path: "contact-me",
    component: ContactMeComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

  ]
})
export class AppRoutingModule { }
