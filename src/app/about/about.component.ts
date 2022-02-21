import { Component, OnInit } from '@angular/core';
import { NAME, info } from '../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = NAME;
  aboutMe = info.aboutMe;
  info = info;
  animateCard = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animateCard = true;
    }, 1000)
  }

}
