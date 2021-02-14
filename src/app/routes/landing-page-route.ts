import {Routes} from '@angular/router';

export const LANDING_PAGE_ROUTE:Routes = [
    {
        path:'',
        loadChildren:()=>import('../landingpage/landingpage.module').then(m=>m.LandingpageModule)
    }
]