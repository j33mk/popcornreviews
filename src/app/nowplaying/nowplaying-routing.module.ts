import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  {path:'',component:ListmoviesComponent},
  {path:'show-movie/:movie_name',component:ShowmovieComponent},
  {path:'testing',component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NowplayingRoutingModule { }
