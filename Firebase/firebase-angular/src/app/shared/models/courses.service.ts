import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Course } from './Course';
import { Lesson } from './Lesson';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class CoursesService {

  constructor(private af: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.af.list('courses')
      .map(Course.fromJsonList);
  } 

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.af.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .map(results => results[0]);
  }

  // findLessonsForCourse(courseUrl: string): Observable<Lesson[]> {
  //   console.log(courseUrl);
  //   const course$ = this.findCourseByUrl(courseUrl);

  //   const lessonsPerCourse$ = course$
  //     .switchMap(course => this.af.list('lessonsPerCourse/' + course.$key));

  //   const courseLessons$ = lessonsPerCourse$
  //     .map(lspc => lspc.map(lpc => this.af.object('lessons/' + lpc.$key)))
  //     .flatMap(fbjs => Observable.combineLatest(fbjs))
  //     .do(console.log);

  //   courseLessons$.subscribe();
    
  //   return Observable.of([]);
  // }

  findLessonKeysPerCourseUrl(courseUrl: string,
    query: FirebaseListFactoryOpts = {}): Observable<string[]> {
    return this.findCourseByUrl(courseUrl)
      .do(val => console.log("course", val))
      .filter(course => !!course)
      .switchMap(course => this.af.list(`lessonsPerCourse/${course.$key}`, query))
      .map(lspc => lspc.map(lpc => lpc.$key));
  }

  findLessonsForLessonKeys(lessonKeys$: Observable<string[]>): Observable<Lesson[]> {
    return lessonKeys$
      .map(lspc => lspc.map(lessonKey => this.af.object('lessons/' + lessonKey)))
      .flatMap(fbojs => Observable.combineLatest(fbojs))

  }

  findAllLessonsForCourse(courseUrl: string): Observable<Lesson[]> {
    return this.findLessonsForLessonKeys(this.findLessonKeysPerCourseUrl(courseUrl));
  }

}