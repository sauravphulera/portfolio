import { Component, OnInit } from '@angular/core';
import { info } from '../constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  info:any = info

  constructor() { }

  ngOnInit(): void {
  }
  openProfile(key:string) {
    window.open(this.info.profiles[key]);
  }
}
