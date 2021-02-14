import {Routes} from '@angular/router';

export const TOP_RATED_ROUTE:Routes = [
    {
        path:'',
        loadChildren:()=>import('../toprated/toprated.module').then(m=>m.TopratedModule)
    }
]