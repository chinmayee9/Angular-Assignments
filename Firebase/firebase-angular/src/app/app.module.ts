
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from "angularfire2";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { HomeComponent } from './home/home.component';

import { LessonsService } from './shared/models/lessons.service';
import { CoursesService } from './shared/models/courses.service';
import { LessonsListComponent } from './lessons-list/lessons-list.component'

import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CourseDetailComponent } from './course-detail/course-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent,
    CoursesComponent,
    TopMenuComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot([
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'courses',
          children: [
            {
              path: ':id',
              component: CourseDetailComponent
            },
            {
              path: '',
              component: CoursesComponent
            }
          ]
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: 'home'
        }
      ])
  ],
  providers: [LessonsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }