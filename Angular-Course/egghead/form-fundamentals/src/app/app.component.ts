import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    .ng-invalid {
      border: 3px solid red;
    }
  `]
})
export class AppComponent {
  title = 'Simple form';
  username = '';
  password = '';
  radioOptions = ['A','B','C','D'];
  dropOptions = ['Select something','A','B','C','D'];
  onSubmit(value) {
    console.log(value)
  }
}
