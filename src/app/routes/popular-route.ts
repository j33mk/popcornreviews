import {Routes} from '@angular/router';

export const POPULAR_ROUTE:Routes = [
    {
        path:'',
        loadChildren:()=>import('../popular/popular.module').then(m=>m.PopularModule)
    }
]