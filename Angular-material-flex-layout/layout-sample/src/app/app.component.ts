import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'It works!';
  // tiles = [
  //   {text: 'Stock', cols: 2, rows: 1, color: 'lightblue'},
  //   {text: 'Username', cols: 2, rows: 1, color: 'lightgreen'},
  //   {text: 'Leader Inv', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Avg Return', cols: 1, rows: 1, color: '#DDBDF1'},
  //   {text: 'Led Inv', cols: 1, rows: 1, color: 'lightyellow'},
  //   {text: 'Win Ratio', cols: 1, rows: 1, color: 'lightgreen'},
  //   {text: 'Return So Far', cols: 1, rows: 2, color: 'lightyellow'},
  //   {text: 'Upside', cols: 1, rows: 2, color: 'lightpink'},
  //   {text: 'Details', cols: 6, rows: 2, color: 'lightblue'}
  // ];

  // newsfeed
  messages: Object[] = [{
    from: 'Ali Connors',
    message: 'I will be in your neighborhood',
    photo: 'assets/images/face3.jpg',
    subject: 'Brunch this weekend?',}, {
    from: 'Trevor Hansen',
    message: 'Wish I could but we have plans',
    photo: 'assets/images/face6.jpg',
    subject: 'Brunch this weekend?',}, {
    from: 'Sandra Adams',
    message: 'Do you have Paris recommendations instead?',
    photo: 'assets/images/face4.jpg',
    subject: 'Brunch this weekend?',
  }, ];
}