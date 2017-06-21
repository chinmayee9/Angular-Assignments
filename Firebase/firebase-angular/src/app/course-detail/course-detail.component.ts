import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CoursesService } from '../shared/models/courses.service'
import { Observable } from 'rxjs/Rx';
import { Course } from '../shared/models/Course'
import { Lesson } from '../shared/models/Lesson'


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course$ : Observable<Course>;
  lessons$ : Observable<Lesson[]>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    const courseUrl = this.route.snapshot.params['id'];
    this.course$ = this.coursesService.findCourseByUrl(courseUrl)
      .do(console.log);
    this.lessons$ = this.coursesService.findLessonsForCourse(courseUrl);
  }

}
