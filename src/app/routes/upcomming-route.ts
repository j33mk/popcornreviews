import {Routes} from '@angular/router';

export const UPCOMING_ROUTE:Routes = [
    {
        path:'',
        loadChildren:()=>import('../upcoming/upcoming.module').then(m=>m.UpcomingModule)
    }
]