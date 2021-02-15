import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SharedModule} from '../shared/shared.module';
import { NowplayingRoutingModule } from './nowplaying-routing.module';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [ListmoviesComponent, ShowmovieComponent, TestingComponent],
  imports: [
    
    NowplayingRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule
  ]
})
export class NowplayingModule { }
