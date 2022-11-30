import { HomeHeroModule } from './shared/home-hero/homehero.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutHeroComponent } from './shared/about-hero/about-hero.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactHeroComponent } from './shared/contact-hero/contact-hero.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { FeaturesComponent } from './shared/features/features.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HireMeComponent } from './shared/hire-me/hire-me.component';
import { HomeHeroComponent } from './shared/home-hero/home-hero.component';
import { HomeServicesComponent } from './shared/home-services/home-services.component';
import { PortfolioHeroComponent } from './shared/portfolio-hero/portfolio-hero.component';
import { ResumeComponent } from './shared/resume/resume.component';
import { SkillSetsComponent } from './shared/skill-sets/skill-sets.component';
import {MyWorkComponent} from "./shared/my-work/my-work.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImageListComponent } from './shared/image-list/image-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutHeroComponent,
    ContactMeComponent,
    ContactFormComponent,
    HomeComponent,
    ContactHeroComponent,
    PortfolioComponent,
    FeaturesComponent,
    FooterComponent,
    HireMeComponent,
    HomeHeroComponent,
    HomeServicesComponent,
    PortfolioHeroComponent,
    ResumeComponent,
    SkillSetsComponent,
    MyWorkComponent,
    NavbarComponent,
    ImageListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeHeroModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
