import { Component } from '@angular/core';
import { NAME } from './constants';
import { info } from './constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  expandDiv = false;
  name = NAME;
  info = info;
}
