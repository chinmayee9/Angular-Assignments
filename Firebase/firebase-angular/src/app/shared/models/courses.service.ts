import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Course } from './Course';
import { Lesson } from './Lesson';
import { AngularFireDatabase } from 'angularfire2/database';

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

  findLessonsForCourse(courseUrl: string): Observable<Lesson[]> {
    console.log(courseUrl);
    const course$ = this.findCourseByUrl(courseUrl);

    const lessonsPerCourse$ = course$
      .switchMap(course => this.af.list('lessonsPerCourse/' + course.$key));

    const courseLessons$ = lessonsPerCourse$
      .map(lspc => lspc.map(lpc => this.af.object('lessons/' + lpc.$key)))
      .flatMap(fbjs => Observable.combineLatest(fbjs))
      .do(console.log);

    courseLessons$.subscribe();
    
    return Observable.of([]);
  }

}