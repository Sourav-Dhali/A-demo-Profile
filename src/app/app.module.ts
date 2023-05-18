import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamasteComponent } from './namaste/namaste.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { CatchupComponent } from './catchup/catchup.component';

@NgModule({
  declarations: [
    AppComponent,
    NamasteComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    CatchupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
