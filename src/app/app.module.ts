import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NewSkillsComponent } from './new-skills/new-skills.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { AchivementsComponent } from './achivements/achivements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NewSkillsComponent,
    ResumeComponent,
    WorkComponent,
    TechnicalDetailsComponent,
    AchivementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
