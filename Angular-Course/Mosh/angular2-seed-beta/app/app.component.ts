import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavouriteComponent} from './favourite.component'

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><authors></authors><favourite></favourite>',
    directives: [CoursesComponent, AuthorsComponent, FavouriteComponent]
})
export class AppComponent { }