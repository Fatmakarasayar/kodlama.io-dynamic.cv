import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ContentComponent } from './components/pages/content/content.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { provideFirebaseApp} from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(()=>getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
