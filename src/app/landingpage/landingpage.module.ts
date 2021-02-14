import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
