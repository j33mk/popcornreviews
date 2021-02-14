import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SharedModule} from '../shared/shared.module';
import { UpcomingRoutingModule } from './upcoming-routing.module';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';


@NgModule({
  declarations: [ListmoviesComponent, ShowmovieComponent],
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UpcomingModule { }
