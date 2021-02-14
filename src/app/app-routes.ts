import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './custom-layouts/landing-page/landing-page.component';
import { NowPlayingComponent } from './custom-layouts/now-playing/now-playing.component';
import { PopularComponent } from './custom-layouts/popular/popular.component';
import { TopratedComponent } from './custom-layouts/toprated/toprated.component';
import { UpcomingComponent } from './custom-layouts/upcoming/upcoming.component';
import { LANDING_PAGE_ROUTE} from './routes/landing-page-route';
import { NOW_PLAYING_ROUTE } from './routes/now-playing-route';
import { POPULAR_ROUTE } from './routes/popular-route';
import { TOP_RATED_ROUTE } from './routes/top-rated-route';
import { UPCOMING_ROUTE } from './routes/upcomming-route';

const routes: Routes = [
  {path:'',component:LandingPageComponent,children:LANDING_PAGE_ROUTE},
  {path:'nowplaying',component:NowPlayingComponent,children:NOW_PLAYING_ROUTE},
  {path:'popular',component:PopularComponent,children:POPULAR_ROUTE},
  {path:'toprated',component:TopratedComponent,children:TOP_RATED_ROUTE},
  {path:'upcoming',component:UpcomingComponent,children:UPCOMING_ROUTE}
  // {path:'/nowplaying',component:NowPlayingComponent},
  // {path:'/popular',component:PopularComponent},
  // {path:'/toprated',component:TopratedComponent},
  // {path:'/upcoming',component:UpcomingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
