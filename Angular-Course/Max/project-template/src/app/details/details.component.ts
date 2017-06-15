import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  clicked = false;
  log = [];
  constructor() { }
  ngOnInit() {
  }
  onToggle() {
    this.clicked = !this.clicked;
    this.log.push(this.log.length + 1)
  }
}
