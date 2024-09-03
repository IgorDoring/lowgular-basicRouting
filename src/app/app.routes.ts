import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: 'full'
    },
    {
        path: "list",
        title: "Users List",
        component: ListComponent
    },
    {
        path: 'detail/:id',
        component: DetailsComponent
    },
    {
        path: '**',
        redirectTo: 'list'
    }
];
