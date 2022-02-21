import { Component, OnInit } from '@angular/core';
import { info, NAME } from 'src/app/constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  expandDiv = false;
  name = NAME;
  info = info;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.expandDiv = true;
    }, 100)
  }

}
