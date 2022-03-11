import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { info, NAME } from 'src/app/constants';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  expandDiv = false;
  name = NAME;
  info = info;

  constructor() {}

  ngOnInit(): void {}

  collapseLayer() {
    this.expandDiv = false;
  }
}
