import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../shared/models/Lesson'

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input()
  lessonsList: Lesson[];

  @Output('lesson')
  lessonEmitter = new EventEmitter<Lesson>();

  constructor() { }

  ngOnInit() {
  }

}
