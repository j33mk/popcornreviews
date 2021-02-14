import {Routes} from '@angular/router';

export const NOW_PLAYING_ROUTE:Routes = [
    {
        path:'',
        loadChildren:()=>import('../nowplaying/nowplaying.module').then(m=>m.NowplayingModule)
    }
]