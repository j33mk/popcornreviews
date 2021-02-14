import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SharedModule} from '../shared/shared.module';
import { NowplayingRoutingModule } from './nowplaying-routing.module';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';


@NgModule({
  declarations: [ListmoviesComponent, ShowmovieComponent],
  imports: [
    CommonModule,
    NowplayingRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class NowplayingModule { }
