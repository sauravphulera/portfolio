import { Component, Input, OnInit } from '@angular/core';
interface SKILLS {
  name: string;
  value: number;
}
interface INFO {
  aboutMe: string;
  skills: Array<SKILLS>;
  resume: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() info: INFO = { aboutMe: '', skills: [], resume: '' };
  aboutMe = '';
  skills: Array<SKILLS> = [];

  constructor() {}

  ngOnInit(): void {
    this.aboutMe = this.info.aboutMe;
    this.skills = this.info.skills;
  }

  getResume() {
    window.open(this.info.resume);
  }
}
