import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/models/lessons.service'
import { Lesson } from '../shared/models/Lesson'
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLessons: Lesson[];
  filtered: Lesson[];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.findAllLessons()
    .do(console.log)
    .subscribe(
      lessons => this.allLessons = this.filtered = lessons
    );
  }

  onSearch(input: string) {
    this.filtered = this.allLessons.filter(lesson => lesson.description.includes(input));
  }

  lessonPush(toInsert: string) {
    console.log(toInsert);
  }

  lessonUpdate(toUpdate: string) {
    console.log(toUpdate);
  }

  lessonDelete() { }

}
