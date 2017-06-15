import {Component} from 'angular2/core'
import {CourseService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#c of courselist">
            {{ c }}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent { 
    title = "This is the courses page";
    courselist;
    constructor(courseService: CourseService){
        this.courselist = courseService.getCourses();
    }
}