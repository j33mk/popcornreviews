import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';

const routes: Routes = [
  {path:'',component:ListmoviesComponent},
  {path:'show-movie/:movie_name',component:ShowmovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingRoutingModule { }
