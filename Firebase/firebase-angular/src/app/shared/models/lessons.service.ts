import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { Lesson } from './Lesson'
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class LessonsService {

  constructor(private af: AngularFireDatabase) { }

  findAllLessons(): Observable<Lesson[]> {
    return this.af.list('lessons')
      .map(Lesson.fromJsonList);
   }
}
