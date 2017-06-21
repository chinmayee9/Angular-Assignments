import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/models/courses.service'
import { Observable } from 'rxjs/Rx';
import { Course } from '../shared/models/Course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.course$ = this.coursesService.findAllCourses()
      .do(console.log);
  }

}
