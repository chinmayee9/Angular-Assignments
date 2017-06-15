import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() msg;
  constructor() { }
  ngOnInit() { }
  onClick(event, value) {
    console.log(value)
    console.log(event)
  }
}
