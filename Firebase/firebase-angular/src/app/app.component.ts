import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Anular 4!';
  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;
  firstCourse: any;

  constructor() { }

  }
