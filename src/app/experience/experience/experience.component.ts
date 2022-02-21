import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience = Experience;
  startCardAnimation = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.startCardAnimation = true;
    }, 1000);
  }
}
