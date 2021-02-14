import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module'
import { LandingPageComponent } from './custom-layouts/landing-page/landing-page.component';
import { NowPlayingComponent } from './custom-layouts/now-playing/now-playing.component';
import { PopularComponent } from './custom-layouts/popular/popular.component';
import { TopratedComponent } from './custom-layouts/toprated/toprated.component';
import { UpcomingComponent } from './custom-layouts/upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NowPlayingComponent,
    PopularComponent,
    TopratedComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
