import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { slideInAnimation } from './animation';
import { ExperienceModule } from './experience/experience.module';
import { LandingModule } from './landing/landing.module';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => AboutModule,
    data: { animation: 'AboutPage' }
  },
  {
    path: 'experience',
    loadChildren: () => ExperienceModule,
    data: { animation: 'experiencePage' }
  },
  {
    path: '',
    loadChildren: () => LandingModule,
    // data: { animation: 'AboutPage' }
  },
  {
    path: '**',
    loadChildren: () => LandingModule,
    // data: { animation: 'AboutPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
