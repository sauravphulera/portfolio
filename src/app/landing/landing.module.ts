import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from '../home/home.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];
@NgModule({
  declarations: [
    LandingComponent,
    // ToolbarComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [CookieService],
})
export class LandingModule {}
